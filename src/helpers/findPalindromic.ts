import isPalindromic from "./isPalindromic";

/**
 * @function findPalindromic
 * @param    {Number[]} numbers
 * @return   {Number[]}
 */
export function findPalindromic(numbers: number[]): number[] {
    let palindromic: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isPalindromic(numbers[i])) {
            palindromic.push(numbers[i]);
        }
    }
    return palindromic;
}
export default findPalindromic;