export type quality =
  | "Battle-Scared"
  | "Well-Worn"
  | "Field-Tested"
  | "Minimal Wear"
  | "Factory New";
export interface skin {
  id?: number;
  weapon: string;
  name: string;
  quality: quality;
  collection: string;
  photo_url: string;
}
