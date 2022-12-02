export const getRandomBetween = (min: number, max: number) => {
  const delta = max - min;
  return min + Math.floor(Math.random() * delta);
}