export const getRandomColor = (alpha: number): string => {
  const baseColor = Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
  const alphaHex = (256 * alpha).toString(16);
  
  return `#${baseColor}${alphaHex}`;
}