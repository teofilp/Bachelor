import { Category } from "./category";
import { Icon } from "./icon";

export interface HabitInfo {
  id: number;
  name: string;
  color?: string;
  icon?: Icon;
  category: Category;
}