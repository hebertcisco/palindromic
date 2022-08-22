import { isPalindromic, findPalindromic } from '../';

describe('findPalindromic', () => {
  const palindromic = [11, 22, 666, 777, 888, 999, 1111, 2222];
  const not_palindromic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  test('should return true if the number is palindromic', () => {
    for (let i = 0; i < palindromic.length; i++) {
      expect(isPalindromic(palindromic[i])).toBe(true);
    }
  });
  test('should return false if the number is palindromic', () => {
    for (let i = 0; i < not_palindromic.length; i++) {
      expect(isPalindromic(not_palindromic[i])).toBe(false);
    }
  });
  test('should return the palindromic numbers', () => {
    const result = findPalindromic([...palindromic, ...not_palindromic]);
    expect(result).toEqual(palindromic);
  });
});
