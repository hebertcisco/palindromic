import { isPrimeNumber } from ".";

/**
 * @function findPrimalNumbers
 * @param    {Number[]} numbers
 * @return   {Number[]}
 */
export function findPrimesNumbers(numbers: number[]): number[] {
    return numbers.filter(isPrimeNumber);
}
export default findPrimesNumbers;