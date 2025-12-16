// Dane realizacji - hardkodowane

export interface RealizationCategory {
  id: number;
  name: string;
  slug: string;
  order: number;
}

export interface Realization {
  id: number;
  imageUrl: string;
  categoryId: number;
}

export const realizationCategories: RealizationCategory[] = [
  { id: 1, name: "Płyta laminowana", slug: "plyta-laminowana", order: 1 },
  { id: 2, name: "Akryl", slug: "akryl", order: 2 },
  {
    id: 3,
    name: "Akryl, lakier + płyta",
    slug: "akryl-lakier-plyta",
    order: 3,
  },
  { id: 4, name: "Blaty HPL", slug: "blaty-hpl", order: 4 },
  { id: 5, name: "MDF lakierowany", slug: "mdf-lakierowany", order: 5 },
  { id: 6, name: "Z fornirem", slug: "z-fornirem", order: 6 },
];

export const realizations: Realization[] = [
  // ==========================================
  // Płyta laminowana (categoryId: 1) - 70 zdjęć
  // ==========================================
  {
    id: 1,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198551-1_opt.webp",
    categoryId: 1,
  },
  {
    id: 2,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198552-2_opt.webp",
    categoryId: 1,
  },
  {
    id: 3,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198562-3_opt.webp",
    categoryId: 1,
  },
  {
    id: 4,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198572-4_opt.webp",
    categoryId: 1,
  },
  {
    id: 5,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198585-5_opt.webp",
    categoryId: 1,
  },
  {
    id: 6,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198591-6_opt.webp",
    categoryId: 1,
  },
  {
    id: 7,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198602-7_opt.webp",
    categoryId: 1,
  },
  {
    id: 8,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198618-9_opt.webp",
    categoryId: 1,
  },
  {
    id: 9,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198628-10_opt.webp",
    categoryId: 1,
  },
  {
    id: 10,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198636-11_opt.webp",
    categoryId: 1,
  },
  {
    id: 11,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198643-12_opt.webp",
    categoryId: 1,
  },
  {
    id: 12,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198652-13_opt.webp",
    categoryId: 1,
  },
  {
    id: 13,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198663-Clipboard_06-22-2025_01_opt.webp",
    categoryId: 1,
  },
  {
    id: 14,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198668-Clipboard_06-22-2025_02_opt.webp",
    categoryId: 1,
  },
  {
    id: 15,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198675-Clipboard_06-22-2025_03_opt.webp",
    categoryId: 1,
  },
  {
    id: 16,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198681-Clipboard_06-22-2025_04_opt.webp",
    categoryId: 1,
  },
  {
    id: 17,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198688-Clipboard_06-22-2025_05_opt.webp",
    categoryId: 1,
  },
  {
    id: 18,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198694-Clipboard_06-22-2025_06_opt.webp",
    categoryId: 1,
  },
  {
    id: 19,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198702-Clipboard_06-22-2025_07_opt.webp",
    categoryId: 1,
  },
  {
    id: 20,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198712-Clipboard_06-22-2025_08_opt.webp",
    categoryId: 1,
  },
  {
    id: 21,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198720-Clipboard_06-22-2025_09_opt.webp",
    categoryId: 1,
  },
  {
    id: 22,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198768-Clipboard_06-22-2025_10_opt.webp",
    categoryId: 1,
  },
  {
    id: 23,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198776-Clipboard_06-22-2025_011_opt.webp",
    categoryId: 1,
  },
  {
    id: 24,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198783-Clipboard_06-22-2025_11_opt.webp",
    categoryId: 1,
  },
  {
    id: 25,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198799-Clipboard_06-22-2025_12_opt.webp",
    categoryId: 1,
  },
  {
    id: 26,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198806-Clipboard_06-22-2025_13_opt.webp",
    categoryId: 1,
  },
  {
    id: 27,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198814-Clipboard_06-22-2025_14_opt.webp",
    categoryId: 1,
  },
  {
    id: 28,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198819-Clipboard_06-22-2025_15_opt.webp",
    categoryId: 1,
  },
  {
    id: 29,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198826-Clipboard_06-22-2025_16_opt.webp",
    categoryId: 1,
  },
  {
    id: 30,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198834-Clipboard_06-22-2025_17_opt.webp",
    categoryId: 1,
  },
  {
    id: 31,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198840-Clipboard_06-22-2025_18_opt.webp",
    categoryId: 1,
  },
  {
    id: 32,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198849-Clipboard_06-22-2025_19_opt.webp",
    categoryId: 1,
  },
  {
    id: 33,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198862-Clipboard_06-22-2025_20_opt.webp",
    categoryId: 1,
  },
  {
    id: 34,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198868-Clipboard_06-22-2025_22_opt.webp",
    categoryId: 1,
  },
  {
    id: 35,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198868-Clipboard_06-22-2025_23_opt.webp",
    categoryId: 1,
  },
  {
    id: 36,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198878-Clipboard_06-22-2025_24_opt.webp",
    categoryId: 1,
  },
  {
    id: 37,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198884-Clipboard_06-22-2025_25_opt.webp",
    categoryId: 1,
  },
  {
    id: 38,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198889-Clipboard_06-22-2025_26_opt.webp",
    categoryId: 1,
  },
  {
    id: 39,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198903-Clipboard_06-22-2025_28_opt.webp",
    categoryId: 1,
  },
  {
    id: 40,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198914-Clipboard_06-22-2025_29_opt.webp",
    categoryId: 1,
  },
  {
    id: 41,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198921-Clipboard_06-22-2025_30_opt.webp",
    categoryId: 1,
  },
  {
    id: 42,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198930-Clipboard_06-22-2025_31_opt.webp",
    categoryId: 1,
  },
  {
    id: 43,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198938-Clipboard_06-22-2025_32_opt.webp",
    categoryId: 1,
  },
  {
    id: 44,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198944-Clipboard_06-22-2025_33_opt.webp",
    categoryId: 1,
  },
  {
    id: 45,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198950-Clipboard_06-22-2025_34_opt.webp",
    categoryId: 1,
  },
  {
    id: 46,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198958-Clipboard_06-22-2025_35_opt.webp",
    categoryId: 1,
  },
  {
    id: 47,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198963-Clipboard_06-22-2025_36_opt.webp",
    categoryId: 1,
  },
  {
    id: 48,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198969-Clipboard_06-22-2025_37_opt.webp",
    categoryId: 1,
  },
  {
    id: 49,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198975-Clipboard_06-22-2025_38_opt.webp",
    categoryId: 1,
  },
  {
    id: 50,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198982-Clipboard_06-22-2025_39_opt.webp",
    categoryId: 1,
  },
  {
    id: 51,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198987-Clipboard_06-22-2025_41_opt.webp",
    categoryId: 1,
  },
  {
    id: 52,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198990-Clipboard_06-22-2025_42_opt.webp",
    categoryId: 1,
  },
  {
    id: 53,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198996-Clipboard_06-22-2025_43_opt.webp",
    categoryId: 1,
  },
  {
    id: 54,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199001-Clipboard_06-22-2025_44_opt.webp",
    categoryId: 1,
  },
  {
    id: 55,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199010-Clipboard_06-22-2025_45_opt.webp",
    categoryId: 1,
  },
  {
    id: 56,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199014-Clipboard_06-22-2025_46_opt.webp",
    categoryId: 1,
  },
  {
    id: 57,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199022-Clipboard_06-22-2025_47_opt.webp",
    categoryId: 1,
  },
  {
    id: 58,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199134-Clipboard_06-22-2025_48_opt.webp",
    categoryId: 1,
  },
  {
    id: 59,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199139-Clipboard_06-22-2025_49_opt.webp",
    categoryId: 1,
  },
  {
    id: 60,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199146-Clipboard_06-22-2025_50_opt.webp",
    categoryId: 1,
  },
  {
    id: 61,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199152-Clipboard_06-22-2025_51_opt.webp",
    categoryId: 1,
  },
  {
    id: 62,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199165-Clipboard_06-22-2025_53_opt.webp",
    categoryId: 1,
  },
  {
    id: 63,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199173-Clipboard_06-22-2025_54_opt.webp",
    categoryId: 1,
  },
  {
    id: 64,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199177-Clipboard_06-22-2025_55_opt.webp",
    categoryId: 1,
  },
  {
    id: 65,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199181-Clipboard_06-22-2025_56_opt.webp",
    categoryId: 1,
  },
  {
    id: 66,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199189-Clipboard_06-22-2025_57_opt.webp",
    categoryId: 1,
  },
  {
    id: 67,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199195-Clipboard_06-22-2025_58_opt.webp",
    categoryId: 1,
  },
  {
    id: 68,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199200-Clipboard_06-22-2025_59_opt.webp",
    categoryId: 1,
  },
  {
    id: 69,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199205-Clipboard_06-22-2025_60_opt.webp",
    categoryId: 1,
  },
  {
    id: 70,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199210-Clipboard_06-22-2025_61_opt.webp",
    categoryId: 1,
  },

  // ==========================================
  // Akryl (categoryId: 2) - 47 zdjęć
  // ==========================================
  {
    id: 71,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876419-Clipboard_06-22-2025_214_opt.webp",
    categoryId: 2,
  },
  {
    id: 72,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876419-Clipboard_06-22-2025_215_opt.webp",
    categoryId: 2,
  },
  {
    id: 73,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876433-Clipboard_06-22-2025_216_opt.webp",
    categoryId: 2,
  },
  {
    id: 74,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876443-Clipboard_06-22-2025_217_opt.webp",
    categoryId: 2,
  },
  {
    id: 75,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876452-Clipboard_06-22-2025_218_opt.webp",
    categoryId: 2,
  },
  {
    id: 76,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876460-Clipboard_06-22-2025_219_opt.webp",
    categoryId: 2,
  },
  {
    id: 77,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876470-Clipboard_06-22-2025_220_opt.webp",
    categoryId: 2,
  },
  {
    id: 78,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876470-Clipboard_06-22-2025_221_opt.webp",
    categoryId: 2,
  },
  {
    id: 79,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876478-Clipboard_06-22-2025_223_opt.webp",
    categoryId: 2,
  },
  {
    id: 80,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876486-Clipboard_06-22-2025_224_opt.webp",
    categoryId: 2,
  },
  {
    id: 81,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876493-Clipboard_06-22-2025_225_opt.webp",
    categoryId: 2,
  },
  {
    id: 82,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876499-Clipboard_06-22-2025_226_opt.webp",
    categoryId: 2,
  },
  {
    id: 83,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876504-Clipboard_06-22-2025_227_opt.webp",
    categoryId: 2,
  },
  {
    id: 84,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876510-Clipboard_06-22-2025_228_opt.webp",
    categoryId: 2,
  },
  {
    id: 85,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876515-Clipboard_06-22-2025_229_opt.webp",
    categoryId: 2,
  },
  {
    id: 86,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876520-Clipboard_06-22-2025_230_opt.webp",
    categoryId: 2,
  },
  {
    id: 87,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876527-Clipboard_06-22-2025_231_opt.webp",
    categoryId: 2,
  },
  {
    id: 88,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876532-Clipboard_06-22-2025_232_opt.webp",
    categoryId: 2,
  },
  {
    id: 89,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876537-Clipboard_06-22-2025_233_opt.webp",
    categoryId: 2,
  },
  {
    id: 90,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876543-Clipboard_06-22-2025_234_opt.webp",
    categoryId: 2,
  },
  {
    id: 91,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876550-Clipboard_06-22-2025_235_opt.webp",
    categoryId: 2,
  },
  {
    id: 92,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876556-Clipboard_06-22-2025_236_opt.webp",
    categoryId: 2,
  },
  {
    id: 93,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876562-Clipboard_06-22-2025_237_opt.webp",
    categoryId: 2,
  },
  {
    id: 94,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876573-Clipboard_06-22-2025_238_opt.webp",
    categoryId: 2,
  },
  {
    id: 95,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876581-Clipboard_06-22-2025_239_opt.webp",
    categoryId: 2,
  },
  {
    id: 96,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876587-Clipboard_06-22-2025_240_opt.webp",
    categoryId: 2,
  },
  {
    id: 97,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876591-Clipboard_06-22-2025_241_opt.webp",
    categoryId: 2,
  },
  {
    id: 98,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876596-Clipboard_06-22-2025_242_opt.webp",
    categoryId: 2,
  },
  {
    id: 99,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876601-Clipboard_06-22-2025_243_opt.webp",
    categoryId: 2,
  },
  {
    id: 100,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876640-Clipboard_06-22-2025_244_opt.webp",
    categoryId: 2,
  },
  {
    id: 101,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876647-Clipboard_06-22-2025_245_opt.webp",
    categoryId: 2,
  },
  {
    id: 102,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876653-Clipboard_06-22-2025_246_opt.webp",
    categoryId: 2,
  },
  {
    id: 103,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876659-Clipboard_06-22-2025_247_opt.webp",
    categoryId: 2,
  },
  {
    id: 104,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876665-Clipboard_06-22-2025_248_opt.webp",
    categoryId: 2,
  },
  {
    id: 105,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876671-Clipboard_06-22-2025_249_opt.webp",
    categoryId: 2,
  },
  {
    id: 106,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876678-Clipboard_06-22-2025_250_opt.webp",
    categoryId: 2,
  },
  {
    id: 107,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876686-Clipboard_06-22-2025_251_opt.webp",
    categoryId: 2,
  },
  {
    id: 108,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876693-Clipboard_06-22-2025_252_opt.webp",
    categoryId: 2,
  },
  {
    id: 109,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876699-Clipboard_06-22-2025_253_opt.webp",
    categoryId: 2,
  },
  {
    id: 110,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876705-Clipboard_06-22-2025_254_opt.webp",
    categoryId: 2,
  },
  {
    id: 111,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876709-Clipboard_06-22-2025_255_opt.webp",
    categoryId: 2,
  },
  {
    id: 112,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876716-Clipboard_06-22-2025_256_opt.webp",
    categoryId: 2,
  },
  {
    id: 113,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876716-Clipboard_06-22-2025_257_opt.webp",
    categoryId: 2,
  },
  {
    id: 114,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876723-Clipboard_06-22-2025_258_opt.webp",
    categoryId: 2,
  },
  {
    id: 115,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876728-Clipboard_06-22-2025_259_opt.webp",
    categoryId: 2,
  },
  {
    id: 116,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876735-Clipboard_06-22-2025_260_opt.webp",
    categoryId: 2,
  },
  {
    id: 117,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393876748-Clipboard_06-22-2025_261_opt.webp",
    categoryId: 2,
  },

  // ==========================================
  // Akryl, lakier + płyta (categoryId: 3) - 71 zdjęć
  // ==========================================
  {
    id: 118,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972626-1_opt.webp",
    categoryId: 3,
  },
  {
    id: 119,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972626-2_opt.webp",
    categoryId: 3,
  },
  {
    id: 120,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972636-3_opt.webp",
    categoryId: 3,
  },
  {
    id: 121,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972642-4_opt.webp",
    categoryId: 3,
  },
  {
    id: 122,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972648-5_opt.webp",
    categoryId: 3,
  },
  {
    id: 123,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972654-6_opt.webp",
    categoryId: 3,
  },
  {
    id: 124,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972667-Clipboard_06-22-2025_145_opt.webp",
    categoryId: 3,
  },
  {
    id: 125,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972667-Clipboard_06-22-2025_146_opt.webp",
    categoryId: 3,
  },
  {
    id: 126,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972672-Clipboard_06-22-2025_147_opt.webp",
    categoryId: 3,
  },
  {
    id: 127,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972679-Clipboard_06-22-2025_148_opt.webp",
    categoryId: 3,
  },
  {
    id: 128,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972684-Clipboard_06-22-2025_149_opt.webp",
    categoryId: 3,
  },
  {
    id: 129,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972689-Clipboard_06-22-2025_150_opt.webp",
    categoryId: 3,
  },
  {
    id: 130,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972694-Clipboard_06-22-2025_151_opt.webp",
    categoryId: 3,
  },
  {
    id: 131,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972700-Clipboard_06-22-2025_154_opt.webp",
    categoryId: 3,
  },
  {
    id: 132,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972705-Clipboard_06-22-2025_155_opt.webp",
    categoryId: 3,
  },
  {
    id: 133,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972711-Clipboard_06-22-2025_156_opt.webp",
    categoryId: 3,
  },
  {
    id: 134,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972718-Clipboard_06-22-2025_157_opt.webp",
    categoryId: 3,
  },
  {
    id: 135,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972729-Clipboard_06-22-2025_158_opt.webp",
    categoryId: 3,
  },
  {
    id: 136,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972735-Clipboard_06-22-2025_159_opt.webp",
    categoryId: 3,
  },
  {
    id: 137,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972740-Clipboard_06-22-2025_160_opt.webp",
    categoryId: 3,
  },
  {
    id: 138,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972745-Clipboard_06-22-2025_161_opt.webp",
    categoryId: 3,
  },
  {
    id: 139,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972753-Clipboard_06-22-2025_162_opt.webp",
    categoryId: 3,
  },
  {
    id: 140,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972760-Clipboard_06-22-2025_163_opt.webp",
    categoryId: 3,
  },
  {
    id: 141,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972768-Clipboard_06-22-2025_164_opt.webp",
    categoryId: 3,
  },
  {
    id: 142,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972778-Clipboard_06-22-2025_165_opt.webp",
    categoryId: 3,
  },
  {
    id: 143,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972785-Clipboard_06-22-2025_166_opt.webp",
    categoryId: 3,
  },
  {
    id: 144,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972793-Clipboard_06-22-2025_167_opt.webp",
    categoryId: 3,
  },
  {
    id: 145,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972803-Clipboard_06-22-2025_168_opt.webp",
    categoryId: 3,
  },
  {
    id: 146,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972811-Clipboard_06-22-2025_169_opt.webp",
    categoryId: 3,
  },
  {
    id: 147,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972817-Clipboard_06-22-2025_170_opt.webp",
    categoryId: 3,
  },
  {
    id: 148,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972837-Clipboard_06-22-2025_171_opt.webp",
    categoryId: 3,
  },
  {
    id: 149,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972850-Clipboard_06-22-2025_172_opt.webp",
    categoryId: 3,
  },
  {
    id: 150,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972851-Clipboard_06-22-2025_173_opt.webp",
    categoryId: 3,
  },
  {
    id: 151,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972869-Clipboard_06-22-2025_174_opt.webp",
    categoryId: 3,
  },
  {
    id: 152,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972882-Clipboard_06-22-2025_175_opt.webp",
    categoryId: 3,
  },
  {
    id: 153,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972896-Clipboard_06-22-2025_176_opt.webp",
    categoryId: 3,
  },
  {
    id: 154,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972911-Clipboard_06-22-2025_177_opt.webp",
    categoryId: 3,
  },
  {
    id: 155,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972919-Clipboard_06-22-2025_178_opt.webp",
    categoryId: 3,
  },
  {
    id: 156,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972930-Clipboard_06-22-2025_179_opt.webp",
    categoryId: 3,
  },
  {
    id: 157,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972938-Clipboard_06-22-2025_180_opt.webp",
    categoryId: 3,
  },
  {
    id: 158,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972947-Clipboard_06-22-2025_181_opt.webp",
    categoryId: 3,
  },
  {
    id: 159,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972954-Clipboard_06-22-2025_182_opt.webp",
    categoryId: 3,
  },
  {
    id: 160,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972959-Clipboard_06-22-2025_183_opt.webp",
    categoryId: 3,
  },
  {
    id: 161,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972968-Clipboard_06-22-2025_184_opt.webp",
    categoryId: 3,
  },
  {
    id: 162,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972974-Clipboard_06-22-2025_185_opt.webp",
    categoryId: 3,
  },
  {
    id: 163,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972987-Clipboard_06-22-2025_187_opt.webp",
    categoryId: 3,
  },
  {
    id: 164,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393972993-Clipboard_06-22-2025_188_opt.webp",
    categoryId: 3,
  },
  {
    id: 165,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973003-Clipboard_06-22-2025_189_opt.webp",
    categoryId: 3,
  },
  {
    id: 166,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973008-Clipboard_06-22-2025_190_opt.webp",
    categoryId: 3,
  },
  {
    id: 167,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973012-Clipboard_06-22-2025_191_opt.webp",
    categoryId: 3,
  },
  {
    id: 168,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973017-Clipboard_06-22-2025_192_opt.webp",
    categoryId: 3,
  },
  {
    id: 169,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973024-Clipboard_06-22-2025_193_opt.webp",
    categoryId: 3,
  },
  {
    id: 170,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973033-Clipboard_06-22-2025_194_opt.webp",
    categoryId: 3,
  },
  {
    id: 171,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973038-Clipboard_06-22-2025_195_opt.webp",
    categoryId: 3,
  },
  {
    id: 172,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973045-Clipboard_06-22-2025_196_opt.webp",
    categoryId: 3,
  },
  {
    id: 173,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973054-Clipboard_06-22-2025_197_opt.webp",
    categoryId: 3,
  },
  {
    id: 174,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973062-Clipboard_06-22-2025_198_opt.webp",
    categoryId: 3,
  },
  {
    id: 175,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973070-Clipboard_06-22-2025_199_opt.webp",
    categoryId: 3,
  },
  {
    id: 176,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973078-Clipboard_06-22-2025_200_opt.webp",
    categoryId: 3,
  },
  {
    id: 177,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973088-Clipboard_06-22-2025_201_opt.webp",
    categoryId: 3,
  },
  {
    id: 178,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973094-Clipboard_06-22-2025_202_opt.webp",
    categoryId: 3,
  },
  {
    id: 179,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973111-Clipboard_06-22-2025_203_opt.webp",
    categoryId: 3,
  },
  {
    id: 180,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973159-Clipboard_06-22-2025_205_opt.webp",
    categoryId: 3,
  },
  {
    id: 181,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973174-Clipboard_06-22-2025_206_opt.webp",
    categoryId: 3,
  },
  {
    id: 182,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973182-Clipboard_06-22-2025_207_opt.webp",
    categoryId: 3,
  },
  {
    id: 183,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973192-Clipboard_06-22-2025_208_opt.webp",
    categoryId: 3,
  },
  {
    id: 184,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973199-Clipboard_06-22-2025_209_opt.webp",
    categoryId: 3,
  },
  {
    id: 185,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973207-Clipboard_06-22-2025_210_opt.webp",
    categoryId: 3,
  },
  {
    id: 186,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973217-Clipboard_06-22-2025_211_opt.webp",
    categoryId: 3,
  },
  {
    id: 187,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973314-Clipboard_06-22-2025_212_opt.webp",
    categoryId: 3,
  },
  {
    id: 188,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756393973322-Clipboard_06-22-2025_213_opt.webp",
    categoryId: 3,
  },

  // ==========================================
  // Blaty HPL (categoryId: 4) - 29 zdjęć
  // ==========================================
  {
    id: 189,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531501-a1-3-1_opt.webp",
    categoryId: 4,
  },
  {
    id: 190,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531520-bigkuchgru-2_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 191,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531528-bigkuchgru-4_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 192,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531540-bigkuchgru-6_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 193,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531554-bigkuchgru-10_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 194,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531566-bigkuchgru-12_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 195,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531577-bigkuchgru-14_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 196,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531587-Biuro-Nieruchomosci-3_opt.webp",
    categoryId: 4,
  },
  {
    id: 197,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531594-Biuro-Nieruchomosci-6_opt.webp",
    categoryId: 4,
  },
  {
    id: 198,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531603-KA1-1_opt.webp",
    categoryId: 4,
  },
  {
    id: 199,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531611-KA1-5_opt.webp",
    categoryId: 4,
  },
  {
    id: 200,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531620-KA2-4-1_opt.webp",
    categoryId: 4,
  },
  {
    id: 201,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531628-kik-1_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 202,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531640-kik-11_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 203,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531654-kitch12-4_opt_opt.webp",
    categoryId: 4,
  },
  {
    id: 204,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531663-kmali-2-2_opt.webp",
    categoryId: 4,
  },
  {
    id: 205,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531711-kmali-4-1_opt.webp",
    categoryId: 4,
  },
  {
    id: 206,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531715-kmali-6-1_opt.webp",
    categoryId: 4,
  },
  {
    id: 207,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531723-kuchczar-4_opt.webp",
    categoryId: 4,
  },
  {
    id: 208,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531729-kwia-9_opt.webp",
    categoryId: 4,
  },
  {
    id: 209,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531735-kwia-11_opt.webp",
    categoryId: 4,
  },
  {
    id: 210,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531744-kwia-14_opt.webp",
    categoryId: 4,
  },
  {
    id: 211,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531750-kwia-16_opt.webp",
    categoryId: 4,
  },
  {
    id: 212,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1740478531761-Meble-66-1_opt.webp",
    categoryId: 4,
  },
  {
    id: 213,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199233-1a,k%20(3)_opt.webp",
    categoryId: 4,
  },
  {
    id: 214,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199240-1r%20(1)_opt.webp",
    categoryId: 4,
  },
  {
    id: 215,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199252-3k%20(2)_opt.webp",
    categoryId: 4,
  },
  {
    id: 216,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199283-3k%20(7)_opt.webp",
    categoryId: 4,
  },
  {
    id: 217,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199318-3k%20(13)_opt.webp",
    categoryId: 4,
  },

  // ==========================================
  // MDF lakierowany (categoryId: 5) - 93 zdjęcia
  // ==========================================
  {
    id: 218,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098361-Clipboard_06-22-2025_02_opt.webp",
    categoryId: 5,
  },
  {
    id: 219,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098362-Clipboard_06-22-2025_03_opt.webp",
    categoryId: 5,
  },
  {
    id: 220,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098372-Clipboard_06-22-2025_04_opt.webp",
    categoryId: 5,
  },
  {
    id: 221,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098372-Clipboard_06-22-2025_05_opt.webp",
    categoryId: 5,
  },
  {
    id: 222,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098382-Clipboard_06-22-2025_06_opt.webp",
    categoryId: 5,
  },
  {
    id: 223,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098389-Clipboard_06-22-2025_07_opt.webp",
    categoryId: 5,
  },
  {
    id: 224,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098397-Clipboard_06-22-2025_08_opt.webp",
    categoryId: 5,
  },
  {
    id: 225,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098406-Clipboard_06-22-2025_09_opt.webp",
    categoryId: 5,
  },
  {
    id: 226,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098413-Clipboard_06-22-2025_62_opt.webp",
    categoryId: 5,
  },
  {
    id: 227,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098419-Clipboard_06-22-2025_63_opt.webp",
    categoryId: 5,
  },
  {
    id: 228,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098427-Clipboard_06-22-2025_64_opt.webp",
    categoryId: 5,
  },
  {
    id: 229,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098436-Clipboard_06-22-2025_65_opt.webp",
    categoryId: 5,
  },
  {
    id: 230,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098447-Clipboard_06-22-2025_66_opt.webp",
    categoryId: 5,
  },
  {
    id: 231,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098455-Clipboard_06-22-2025_67_opt.webp",
    categoryId: 5,
  },
  {
    id: 232,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098462-Clipboard_06-22-2025_68_opt.webp",
    categoryId: 5,
  },
  {
    id: 233,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098468-Clipboard_06-22-2025_69_opt.webp",
    categoryId: 5,
  },
  {
    id: 234,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098475-Clipboard_06-22-2025_70_opt.webp",
    categoryId: 5,
  },
  {
    id: 235,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098482-Clipboard_06-22-2025_71_opt.webp",
    categoryId: 5,
  },
  {
    id: 236,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098492-Clipboard_06-22-2025_72_opt.webp",
    categoryId: 5,
  },
  {
    id: 237,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098502-Clipboard_06-22-2025_73_opt.webp",
    categoryId: 5,
  },
  {
    id: 238,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098509-Clipboard_06-22-2025_74_opt.webp",
    categoryId: 5,
  },
  {
    id: 239,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098515-Clipboard_06-22-2025_75_opt.webp",
    categoryId: 5,
  },
  {
    id: 240,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098525-Clipboard_06-22-2025_76_opt.webp",
    categoryId: 5,
  },
  {
    id: 241,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098537-Clipboard_06-22-2025_77_opt.webp",
    categoryId: 5,
  },
  {
    id: 242,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098544-Clipboard_06-22-2025_78_opt.webp",
    categoryId: 5,
  },
  {
    id: 243,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098551-Clipboard_06-22-2025_79_opt.webp",
    categoryId: 5,
  },
  {
    id: 244,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098558-Clipboard_06-22-2025_80_opt.webp",
    categoryId: 5,
  },
  {
    id: 245,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098564-Clipboard_06-22-2025_81_opt.webp",
    categoryId: 5,
  },
  {
    id: 246,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098607-Clipboard_06-22-2025_82_opt.webp",
    categoryId: 5,
  },
  {
    id: 247,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098618-Clipboard_06-22-2025_83_opt.webp",
    categoryId: 5,
  },
  {
    id: 248,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098628-Clipboard_06-22-2025_84_opt.webp",
    categoryId: 5,
  },
  {
    id: 249,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098636-Clipboard_06-22-2025_85_opt.webp",
    categoryId: 5,
  },
  {
    id: 250,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098642-Clipboard_06-22-2025_86_opt.webp",
    categoryId: 5,
  },
  {
    id: 251,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098647-Clipboard_06-22-2025_87_opt.webp",
    categoryId: 5,
  },
  {
    id: 252,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098661-Clipboard_06-22-2025_88_opt.webp",
    categoryId: 5,
  },
  {
    id: 253,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098666-Clipboard_06-22-2025_89_opt.webp",
    categoryId: 5,
  },
  {
    id: 254,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098674-Clipboard_06-22-2025_90_opt.webp",
    categoryId: 5,
  },
  {
    id: 255,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098681-Clipboard_06-22-2025_91_opt.webp",
    categoryId: 5,
  },
  {
    id: 256,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098691-Clipboard_06-22-2025_92_opt.webp",
    categoryId: 5,
  },
  {
    id: 257,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098701-Clipboard_06-22-2025_93_opt.webp",
    categoryId: 5,
  },
  {
    id: 258,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098709-Clipboard_06-22-2025_94_opt.webp",
    categoryId: 5,
  },
  {
    id: 259,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098718-Clipboard_06-22-2025_95_opt.webp",
    categoryId: 5,
  },
  {
    id: 260,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098723-Clipboard_06-22-2025_96_opt.webp",
    categoryId: 5,
  },
  {
    id: 261,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098728-Clipboard_06-22-2025_97_opt.webp",
    categoryId: 5,
  },
  {
    id: 262,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098733-Clipboard_06-22-2025_98_opt.webp",
    categoryId: 5,
  },
  {
    id: 263,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098745-Clipboard_06-22-2025_99_opt.webp",
    categoryId: 5,
  },
  {
    id: 264,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098754-Clipboard_06-22-2025_100_opt.webp",
    categoryId: 5,
  },
  {
    id: 265,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098761-Clipboard_06-22-2025_101_opt.webp",
    categoryId: 5,
  },
  {
    id: 266,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098797-Clipboard_06-22-2025_102_opt.webp",
    categoryId: 5,
  },
  {
    id: 267,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098809-Clipboard_06-22-2025_103_opt.webp",
    categoryId: 5,
  },
  {
    id: 268,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098834-Clipboard_06-22-2025_104_opt.webp",
    categoryId: 5,
  },
  {
    id: 269,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098848-Clipboard_06-22-2025_105_opt.webp",
    categoryId: 5,
  },
  {
    id: 270,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098854-Clipboard_06-22-2025_106_opt.webp",
    categoryId: 5,
  },
  {
    id: 271,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098858-Clipboard_06-22-2025_107_opt.webp",
    categoryId: 5,
  },
  {
    id: 272,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098863-Clipboard_06-22-2025_108_opt.webp",
    categoryId: 5,
  },
  {
    id: 273,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098867-Clipboard_06-22-2025_109_opt.webp",
    categoryId: 5,
  },
  {
    id: 274,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098874-Clipboard_06-22-2025_110_opt.webp",
    categoryId: 5,
  },
  {
    id: 275,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098881-Clipboard_06-22-2025_111_opt.webp",
    categoryId: 5,
  },
  {
    id: 276,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098889-Clipboard_06-22-2025_112_opt.webp",
    categoryId: 5,
  },
  {
    id: 277,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098897-Clipboard_06-22-2025_113_opt.webp",
    categoryId: 5,
  },
  {
    id: 278,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098903-Clipboard_06-22-2025_114_opt.webp",
    categoryId: 5,
  },
  {
    id: 279,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098912-Clipboard_06-22-2025_115_opt.webp",
    categoryId: 5,
  },
  {
    id: 280,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098922-Clipboard_06-22-2025_116_opt.webp",
    categoryId: 5,
  },
  {
    id: 281,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098929-Clipboard_06-22-2025_117_opt.webp",
    categoryId: 5,
  },
  {
    id: 282,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098936-Clipboard_06-22-2025_118_opt.webp",
    categoryId: 5,
  },
  {
    id: 283,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098940-Clipboard_06-22-2025_119_opt.webp",
    categoryId: 5,
  },
  {
    id: 284,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098940-Clipboard_06-22-2025_120_opt.webp",
    categoryId: 5,
  },
  {
    id: 285,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098971-Clipboard_06-22-2025_121_opt.webp",
    categoryId: 5,
  },
  {
    id: 286,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098975-Clipboard_06-22-2025_122_opt.webp",
    categoryId: 5,
  },
  {
    id: 287,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098981-Clipboard_06-22-2025_123_opt.webp",
    categoryId: 5,
  },
  {
    id: 288,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098987-Clipboard_06-22-2025_124_opt.webp",
    categoryId: 5,
  },
  {
    id: 289,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098997-Clipboard_06-22-2025_125_opt.webp",
    categoryId: 5,
  },
  {
    id: 290,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099004-Clipboard_06-22-2025_126_opt.webp",
    categoryId: 5,
  },
  {
    id: 291,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099010-Clipboard_06-22-2025_127_opt.webp",
    categoryId: 5,
  },
  {
    id: 292,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099020-Clipboard_06-22-2025_128_opt.webp",
    categoryId: 5,
  },
  {
    id: 293,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099025-Clipboard_06-22-2025_129_opt.webp",
    categoryId: 5,
  },
  {
    id: 294,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099033-Clipboard_06-22-2025_130_opt.webp",
    categoryId: 5,
  },
  {
    id: 295,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099041-Clipboard_06-22-2025_131_opt.webp",
    categoryId: 5,
  },
  {
    id: 296,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099048-Clipboard_06-22-2025_132_opt.webp",
    categoryId: 5,
  },
  {
    id: 297,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099054-Clipboard_06-22-2025_133_opt.webp",
    categoryId: 5,
  },
  {
    id: 298,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099061-Clipboard_06-22-2025_134_opt.webp",
    categoryId: 5,
  },
  {
    id: 299,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099064-Clipboard_06-22-2025_135_opt.webp",
    categoryId: 5,
  },
  {
    id: 300,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099072-Clipboard_06-22-2025_137_opt.webp",
    categoryId: 5,
  },
  {
    id: 301,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099076-Clipboard_06-22-2025_138_opt.webp",
    categoryId: 5,
  },
  {
    id: 302,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099175-Clipboard_06-22-2025_139_opt.webp",
    categoryId: 5,
  },
  {
    id: 303,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099180-Clipboard_06-22-2025_140_opt.webp",
    categoryId: 5,
  },
  {
    id: 304,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099187-Clipboard_06-22-2025_141_opt.webp",
    categoryId: 5,
  },
  {
    id: 305,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099194-Clipboard_06-22-2025_142_opt.webp",
    categoryId: 5,
  },
  {
    id: 306,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099205-Clipboard_06-22-2025_143_opt.webp",
    categoryId: 5,
  },
  {
    id: 307,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099251-Clipboard_06-22-2025_144_opt.webp",
    categoryId: 5,
  },
  {
    id: 308,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099260-Clipboard_06-22-2025_262_opt.webp",
    categoryId: 5,
  },
  {
    id: 309,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099267-Clipboard_06-22-2025_263_opt.webp",
    categoryId: 5,
  },
  {
    id: 310,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099272-Clipboard_06-22-2025_264_opt.webp",
    categoryId: 5,
  },

  // ==========================================
  // Z fornirem (categoryId: 6) - 14 zdjęć
  // ==========================================
  {
    id: 311,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274065-1_opt.webp",
    categoryId: 6,
  },
  {
    id: 312,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274065-2_opt.webp",
    categoryId: 6,
  },
  {
    id: 313,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274075-3_opt.webp",
    categoryId: 6,
  },
  {
    id: 314,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274082-4_opt.webp",
    categoryId: 6,
  },
  {
    id: 315,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274089-5_opt.webp",
    categoryId: 6,
  },
  {
    id: 316,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274096-6_opt.webp",
    categoryId: 6,
  },
  {
    id: 317,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274106-7_opt.webp",
    categoryId: 6,
  },
  {
    id: 318,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274116-8_opt.webp",
    categoryId: 6,
  },
  {
    id: 319,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274123-9_opt.webp",
    categoryId: 6,
  },
  {
    id: 320,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274130-10_opt.webp",
    categoryId: 6,
  },
  {
    id: 321,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274135-11_opt.webp",
    categoryId: 6,
  },
  {
    id: 322,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274142-12_opt.webp",
    categoryId: 6,
  },
  {
    id: 323,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274148-Clipboard_06-22-2025_152_opt.webp",
    categoryId: 6,
  },
  {
    id: 324,
    imageUrl:
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394274153-Clipboard_06-22-2025_153_opt.webp",
    categoryId: 6,
  },
];

// Funkcje pomocnicze
export function getRealizationsByCategory(
  categoryId: number | null
): Realization[] {
  if (categoryId === null) {
    return realizations;
  }
  return realizations.filter((r) => r.categoryId === categoryId);
}

export function getCategoryById(id: number): RealizationCategory | undefined {
  return realizationCategories.find((c) => c.id === id);
}

export function getCategoryBySlug(
  slug: string
): RealizationCategory | undefined {
  return realizationCategories.find((c) => c.slug === slug);
}
