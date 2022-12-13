import { Category } from "../models/category";
import { getColorForCategory } from "../utils/colors";
import { getRandomBetween } from "../utils/random";

const getLightness = () => getRandomBetween(50, 65);

export const getRandomColorForCategory = (category: Category) => getColorForCategory(category, getLightness);