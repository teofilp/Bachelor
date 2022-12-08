import { Category } from "./category";
import { Icon } from "./icon";
import { IconType } from "./iconType";

export interface HabitInfo {
  name: string;
  color?: string;
  icon?: Icon;
  category: Category;
}