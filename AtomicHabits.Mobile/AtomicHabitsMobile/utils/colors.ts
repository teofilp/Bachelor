import { Category } from "../models/category";

export const getRandomColor = (alpha: number): string => {
  const baseColor = Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
  const alphaHex = (256 * alpha).toString(16);
  
  return `#${baseColor}${alphaHex}`;
}

export const getColorForCategory = (category: Category, getLightnessFun: () => number) => ({
  Health: `hsl(241, 55%, ${getLightnessFun()}%)`,
  Lifestyle: `hsl(204, 70%, ${getLightnessFun()}%)`,
  Mindfulness: `hsl(35, 70%, ${getLightnessFun()}%)`,
  Social: `hsl(100, 60%, ${getLightnessFun()}%)`,
  Sports: `hsl(180, 55%, ${getLightnessFun()}%)`,
})[category];

export const generatedColors = ['Health', 'Lifestyle', 'Mindfulness', 'Social', 'Sports'].map(category => 
   Array.from(new Array(5).keys()).map(light => getColorForCategory(category as Category, () => 70 - light * 5)));