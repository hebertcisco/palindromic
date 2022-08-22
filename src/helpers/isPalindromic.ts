/**
 * @function isPalindromic
 * @param    {Number} value
 * @return   {Boolean}
 */
export function isPalindromic(value: number): boolean {
  const digits = String(value).split('');
  const reverse = digits.reverse().join('');
  const same = digits.join('');
  const hasTwoOrMoreDigits = digits.length > 1;
  const hasTwoOrMoreDigitsInReverse = reverse.length > 1;
  const hasTwoOrMoreDigitsInSame = same.length > 1;
  const isPalindromic = hasTwoOrMoreDigits && hasTwoOrMoreDigitsInReverse && hasTwoOrMoreDigitsInSame;
  return isPalindromic;
}
export default isPalindromic;
