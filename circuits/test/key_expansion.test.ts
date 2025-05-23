import { WitnessTester } from "circomkit";
import { circomkit } from "./common";

describe("KeyExpansion", () => {
  it("should compute correctly for aes128", async () => {
    const circuit: WitnessTester<["key"], ["keyExpanded"]> = await circomkit.WitnessTester(`SubBytes`, {
      file: "aes-ctr/key_expansion",
      template: "KeyExpansion",
      params: [4, 10],
    });
    console.log("#constraints:", await circuit.getConstraintCount());
    const key = [0x2b, 0x7e, 0x15, 0x16, 0x28, 0xae, 0xd2, 0xa6, 0xab, 0xf7, 0x15, 0x88, 0x09, 0xcf, 0x4f, 0x3c];
    const keyExpanded = [
      [0x2b, 0x7e, 0x15, 0x16],
      [0x28, 0xae, 0xd2, 0xa6],
      [0xab, 0xf7, 0x15, 0x88],
      [0x09, 0xcf, 0x4f, 0x3c],
      [0xa0, 0xfa, 0xfe, 0x17],
      [0x88, 0x54, 0x2c, 0xb1],
      [0x23, 0xa3, 0x39, 0x39],
      [0x2a, 0x6c, 0x76, 0x05],
      [0xf2, 0xc2, 0x95, 0xf2],
      [0x7a, 0x96, 0xb9, 0x43],
      [0x59, 0x35, 0x80, 0x7a],
      [0x73, 0x59, 0xf6, 0x7f],
      [0x3d, 0x80, 0x47, 0x7d],
      [0x47, 0x16, 0xfe, 0x3e],
      [0x1e, 0x23, 0x7e, 0x44],
      [0x6d, 0x7a, 0x88, 0x3b],
      [0xef, 0x44, 0xa5, 0x41],
      [0xa8, 0x52, 0x5b, 0x7f],
      [0xb6, 0x71, 0x25, 0x3b],
      [0xdb, 0x0b, 0xad, 0x00],
      [0xd4, 0xd1, 0xc6, 0xf8],
      [0x7c, 0x83, 0x9d, 0x87],
      [0xca, 0xf2, 0xb8, 0xbc],
      [0x11, 0xf9, 0x15, 0xbc],
      [0x6d, 0x88, 0xa3, 0x7a],
      [0x11, 0x0b, 0x3e, 0xfd],
      [0xdb, 0xf9, 0x86, 0x41],
      [0xca, 0x00, 0x93, 0xfd],
      [0x4e, 0x54, 0xf7, 0x0e],
      [0x5f, 0x5f, 0xc9, 0xf3],
      [0x84, 0xa6, 0x4f, 0xb2],
      [0x4e, 0xa6, 0xdc, 0x4f],
      [0xea, 0xd2, 0x73, 0x21],
      [0xb5, 0x8d, 0xba, 0xd2],
      [0x31, 0x2b, 0xf5, 0x60],
      [0x7f, 0x8d, 0x29, 0x2f],
      [0xac, 0x77, 0x66, 0xf3],
      [0x19, 0xfa, 0xdc, 0x21],
      [0x28, 0xd1, 0x29, 0x41],
      [0x57, 0x5c, 0x00, 0x6e],
      [0xd0, 0x14, 0xf9, 0xa8],
      [0xc9, 0xee, 0x25, 0x89],
      [0xe1, 0x3f, 0x0c, 0xc8],
      [0xb6, 0x63, 0x0c, 0xa6],
    ];
    await circuit.expectPass({ key }, { keyExpanded });
  });
  it("should compute correctly for aes 192", async () => {
    const circuit: WitnessTester<["key"], ["keyExpanded"]> = await circomkit.WitnessTester(`SubBytes`, {
      file: "aes-ctr/key_expansion",
      template: "KeyExpansion",
      params: [6, 12],
    });
    console.log("#constraints:", await circuit.getConstraintCount());
    const key = [
      0x8e, 0x73, 0xb0, 0xf7, 0xda, 0x0e, 0x64, 0x52, 0xc8, 0x10, 0xf3, 0x2b, 0x80, 0x90, 0x79, 0xe5, 0x62, 0xf8, 0xea,
      0xd2, 0x52, 0x2c, 0x6b, 0x7b,
    ];

    const keyExpanded = [
      [0x8e, 0x73, 0xb0, 0xf7],
      [0xda, 0x0e, 0x64, 0x52],
      [0xc8, 0x10, 0xf3, 0x2b],
      [0x80, 0x90, 0x79, 0xe5],
      [0x62, 0xf8, 0xea, 0xd2],
      [0x52, 0x2c, 0x6b, 0x7b],
      [0xfe, 0x0c, 0x91, 0xf7],
      [0x24, 0x02, 0xf5, 0xa5],
      [0xec, 0x12, 0x06, 0x8e],
      [0x6c, 0x82, 0x7f, 0x6b],
      [0x0e, 0x7a, 0x95, 0xb9],
      [0x5c, 0x56, 0xfe, 0xc2],
      [0x4d, 0xb7, 0xb4, 0xbd],
      [0x69, 0xb5, 0x41, 0x18],
      [0x85, 0xa7, 0x47, 0x96],
      [0xe9, 0x25, 0x38, 0xfd],
      [0xe7, 0x5f, 0xad, 0x44],
      [0xbb, 0x09, 0x53, 0x86],
      [0x48, 0x5a, 0xf0, 0x57],
      [0x21, 0xef, 0xb1, 0x4f],
      [0xa4, 0x48, 0xf6, 0xd9],
      [0x4d, 0x6d, 0xce, 0x24],
      [0xaa, 0x32, 0x63, 0x60],
      [0x11, 0x3b, 0x30, 0xe6],
      [0xa2, 0x5e, 0x7e, 0xd5],
      [0x83, 0xb1, 0xcf, 0x9a],
      [0x27, 0xf9, 0x39, 0x43],
      [0x6a, 0x94, 0xf7, 0x67],
      [0xc0, 0xa6, 0x94, 0x07],
      [0xd1, 0x9d, 0xa4, 0xe1],
      [0xec, 0x17, 0x86, 0xeb],
      [0x6f, 0xa6, 0x49, 0x71],
      [0x48, 0x5f, 0x70, 0x32],
      [0x22, 0xcb, 0x87, 0x55],
      [0xe2, 0x6d, 0x13, 0x52],
      [0x33, 0xf0, 0xb7, 0xb3],
      [0x40, 0xbe, 0xeb, 0x28],
      [0x2f, 0x18, 0xa2, 0x59],
      [0x67, 0x47, 0xd2, 0x6b],
      [0x45, 0x8c, 0x55, 0x3e],
      [0xa7, 0xe1, 0x46, 0x6c],
      [0x94, 0x11, 0xf1, 0xdf],
      [0x82, 0x1f, 0x75, 0x0a],
      [0xad, 0x07, 0xd7, 0x53],
      [0xca, 0x40, 0x05, 0x38],
      [0x8f, 0xcc, 0x50, 0x06],
      [0x28, 0x2d, 0x16, 0x6a],
      [0xbc, 0x3c, 0xe7, 0xb5],
      [0xe9, 0x8b, 0xa0, 0x6f],
      [0x44, 0x8c, 0x77, 0x3c],
      [0x8e, 0xcc, 0x72, 0x04],
      [0x01, 0x00, 0x22, 0x02],
    ];

    await circuit.expectPass({ key }, { keyExpanded });
  });

  it("should compute correctly for aes256", async () => {
    const circuit: WitnessTester<["key"], ["keyExpanded"]> = await circomkit.WitnessTester(`SubBytes`, {
      file: "aes-ctr/key_expansion",
      template: "KeyExpansion",
      params: [8, 14],
    });
    console.log("#constraints:", await circuit.getConstraintCount());
    const key = [
      0x60, 0x3d, 0xeb, 0x10, 0x15, 0xca, 0x71, 0xbe, 0x2b, 0x73, 0xae, 0xf0, 0x85, 0x7d, 0x77, 0x81, 0x1f, 0x35, 0x2c,
      0x07, 0x3b, 0x61, 0x08, 0xd7, 0x2d, 0x98, 0x10, 0xa3, 0x09, 0x14, 0xdf, 0xf4,
    ];

    const keyExpanded = [
      [0x60, 0x3d, 0xeb, 0x10],
      [0x15, 0xca, 0x71, 0xbe],
      [0x2b, 0x73, 0xae, 0xf0],
      [0x85, 0x7d, 0x77, 0x81],
      [0x1f, 0x35, 0x2c, 0x07],
      [0x3b, 0x61, 0x08, 0xd7],
      [0x2d, 0x98, 0x10, 0xa3],
      [0x09, 0x14, 0xdf, 0xf4],
      [0x9b, 0xa3, 0x54, 0x11],
      [0x8e, 0x69, 0x25, 0xaf],
      [0xa5, 0x1a, 0x8b, 0x5f],
      [0x20, 0x67, 0xfc, 0xde],
      [0xa8, 0xb0, 0x9c, 0x1a],
      [0x93, 0xd1, 0x94, 0xcd],
      [0xbe, 0x49, 0x84, 0x6e],
      [0xb7, 0x5d, 0x5b, 0x9a],
      [0xd5, 0x9a, 0xec, 0xb8],
      [0x5b, 0xf3, 0xc9, 0x17],
      [0xfe, 0xe9, 0x42, 0x48],
      [0xde, 0x8e, 0xbe, 0x96],
      [0xb5, 0xa9, 0x32, 0x8a],
      [0x26, 0x78, 0xa6, 0x47],
      [0x98, 0x31, 0x22, 0x29],
      [0x2f, 0x6c, 0x79, 0xb3],
      [0x81, 0x2c, 0x81, 0xad],
      [0xda, 0xdf, 0x48, 0xba],
      [0x24, 0x36, 0x0a, 0xf2],
      [0xfa, 0xb8, 0xb4, 0x64],
      [0x98, 0xc5, 0xbf, 0xc9],
      [0xbe, 0xbd, 0x19, 0x8e],
      [0x26, 0x8c, 0x3b, 0xa7],
      [0x09, 0xe0, 0x42, 0x14],
      [0x68, 0x00, 0x7b, 0xac],
      [0xb2, 0xdf, 0x33, 0x16],
      [0x96, 0xe9, 0x39, 0xe4],
      [0x6c, 0x51, 0x8d, 0x80],
      [0xc8, 0x14, 0xe2, 0x04],
      [0x76, 0xa9, 0xfb, 0x8a],
      [0x50, 0x25, 0xc0, 0x2d],
      [0x59, 0xc5, 0x82, 0x39],
      [0xde, 0x13, 0x69, 0x67],
      [0x6c, 0xcc, 0x5a, 0x71],
      [0xfa, 0x25, 0x63, 0x95],
      [0x96, 0x74, 0xee, 0x15],
      [0x58, 0x86, 0xca, 0x5d],
      [0x2e, 0x2f, 0x31, 0xd7],
      [0x7e, 0x0a, 0xf1, 0xfa],
      [0x27, 0xcf, 0x73, 0xc3],
      [0x74, 0x9c, 0x47, 0xab],
      [0x18, 0x50, 0x1d, 0xda],
      [0xe2, 0x75, 0x7e, 0x4f],
      [0x74, 0x01, 0x90, 0x5a],
      [0xca, 0xfa, 0xaa, 0xe3],
      [0xe4, 0xd5, 0x9b, 0x34],
      [0x9a, 0xdf, 0x6a, 0xce],
      [0xbd, 0x10, 0x19, 0x0d],
      [0xfe, 0x48, 0x90, 0xd1],
      [0xe6, 0x18, 0x8d, 0x0b],
      [0x04, 0x6d, 0xf3, 0x44],
      [0x70, 0x6c, 0x63, 0x1e],
    ];

    await circuit.expectPass({ key }, { keyExpanded });
  });
});
