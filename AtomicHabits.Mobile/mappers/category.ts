import { Category } from "../models/category";
import { getRandomBetween } from "../utils/random";

const getLightness = () => getRandomBetween(60, 90);

export const getColorForCategory = (category: Category) => ({
  Health: `hsl(241, 55%, ${getLightness()}%)`,
  Lifestyle: `hsl(204, 70%, ${getLightness()}%)`,
  Mindfulness: `hsl(35, 70%, ${getLightness()}%)`,
})[category];