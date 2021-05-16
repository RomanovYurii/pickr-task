import generateRandomDigit from 'utils/generateRandomDigit';

export default (times: number = 3): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < times; i++) {
    arr[i] = generateRandomDigit();
  }
  return arr;
};
