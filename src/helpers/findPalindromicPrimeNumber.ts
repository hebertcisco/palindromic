import isPrimeNumber from "../utils/isPrimeNumber";
import isPalindromic from "./isPalindromic";

/**
 * @function findPalindromicPrimeNumber
 * @param    {Number} value
 * @return   {Number}
 */
export function findPalindromicPrimeNumber(value: number): number {
    if (isPrimeNumber(value) && isPalindromic(value)) {
        return value;
    }
    return 0;
}
export default findPalindromicPrimeNumber;