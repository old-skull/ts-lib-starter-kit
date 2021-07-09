import { MOCK_ALPHABET_LOWER } from './consts.mock';

export const MOCK_GET_RANDOM_STRING = (
  length: number = 4,
  characters: string = MOCK_ALPHABET_LOWER
): string => {
  const res = [];

  const charactersLength: number = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * charactersLength);
    const randomCharByIdx = characters.charAt(randomIdx);

    res.push(randomCharByIdx);
  }

  return res.join('');
};
