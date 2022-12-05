import { Category } from "./category";
import { IconType } from "./iconType";

export interface HabitInfo {
  name: string;
  color?: string;
  icon?: string;
  category: Category;
  iconType: IconType;
}