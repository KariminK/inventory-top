export interface skin {
  id?: number;
  weapon: string;
  name: string;
  quality:
    | "Battle-Scared"
    | "Well-Worn"
    | "Field-Tested"
    | "Minimal Wear"
    | "Factory New";
  collection: string;
}
