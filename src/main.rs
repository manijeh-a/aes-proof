//! This generates witnesses to test circom artifacts in the `circuits` directory.

#![feature(trivial_bounds)]
#![allow(unused_imports)]
#![allow(unused_variables)]
#![allow(dead_code)]
#![allow(unreachable_code)]
#![allow(non_snake_case)]
#![allow(clippy::clone_on_copy)]
#![allow(unused_mut)]

use std::{io, io::Write};

use aes::{cipher::generic_array::GenericArray, Aes256};
use cipher::consts::U16;
use utils::make_json_witness;

mod consts;
mod proof;
mod utils;
mod witness;

/// Circom compilation artifacts
/// Must compile circom artifacts first if these aren't found.
const SIV_WTNS: &str = "./build/gcm_siv_dec_2_keys_test_js/gcm_siv_dec_2_keys_test.wasm";
const SIV_R1CS: &str = "./build/gcm_siv_dec_2_keys_test.r1cs";
const AES_256_CRT_WTNS: &str = "./build/aes_256_ctr_test_js/aes_256_ctr_test.wasm";
const AES_256_CRT_R1CS: &str = "./build/aes_256_ctr_test.r1cs";

pub type AAD = [u8; 5];
pub type Nonce = [u8; 12];

// convenience type aliases for AES-CTR, wrapping type aliases from `ctr` crate
pub(crate) type Ctr32BE<Aes128> = ctr::CtrCore<Aes128, ctr::flavors::Ctr32BE>;
pub(crate) type Aes256Ctr32BE = ctr::Ctr32BE<Aes256>;
pub(crate) type Aes128Ctr32BE = ctr::Ctr32BE<aes::Aes128>; // Note: Ctr32BE is used in AES GCM

/// AES 128-bit block
pub(crate) type Block = GenericArray<u8, U16>;

#[tokio::main]
async fn main() -> io::Result<()> {
    let mut witness = witness::aes_witnesses(witness::CipherMode::Vanilla).unwrap();
    witness.iv.extend_from_slice(&[0, 0, 0, 0]);

    make_json_witness(&witness, witness::CipherMode::Vanilla).unwrap();
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    // Test the AES-GCM-SIV circuit (from electron labs)
    #[tokio::test]
    async fn test_aes_gcm_siv() {
        // generate witness
        let mut witness = witness::aes_witnesses(witness::CipherMode::GcmSiv).unwrap();

        // log one of them
        println!(
            "proof gen: key={:?}, iv={:?}, ct={:?}, pt={:?}",
            witness.key, witness.iv, witness.ct, witness.pt
        );

        // tls1.3 junk
        witness.iv.extend_from_slice(&[0; 4]);

        // generate proof
        proof::gen_proof_aes_gcm_siv(&witness, SIV_WTNS, SIV_R1CS);
    }
}
