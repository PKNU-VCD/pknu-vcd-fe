export const getRandomThemeColor = <T extends readonly string[]>(colors: T): T[number] => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
