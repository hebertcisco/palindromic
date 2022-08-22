/**
 * @function isPalindromic
 * @param    {Number | String} value
 * @return   {Boolean}
 */
export function isPalindromic(value: number | string): boolean {
  const stringValue = value.toString();
  const regExp = /[\W_]/g;
  const lowRegString = stringValue.toLowerCase().replace(regExp, '');
  const reverseString = lowRegString.split('').reverse().join('');
  return reverseString === lowRegString;
}
export default isPalindromic;
