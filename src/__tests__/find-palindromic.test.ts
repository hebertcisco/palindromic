import { isPalindromic, findPalindromic } from '../';

describe('findPalindromic', () => {
  const palindromic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, 777, 888, 999, 1111, 1221, 1331, 1441, 1551, 1661, 1771, 1881, 1991, 2002];
  const not_palindromic = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63];
  test('should return true if the number is palindromic', () => {
    palindromic.forEach(value => {
      expect(isPalindromic(value)).toBe(true);
    });
  });
  test('should return false if the number is palindromic', () => {
    not_palindromic.forEach(value => {
      expect(isPalindromic(value)).toBe(false);
    });
  });
  test('should return the palindromic numbers', () => {
    const result = findPalindromic([...palindromic, ...not_palindromic]);
    expect(result).toEqual(palindromic);
  });
});
