export const sumIpAdress = (ipAdress) => {
  const numbers = ipAdress.split(".");
  return numbers.reduce((sum, number) => sum + parseInt(number), 0);
};
