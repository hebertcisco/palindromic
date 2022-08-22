/**
 * @function isPrimeNumber
 * @param    {Number} number
 * @return   {Boolean}
 */
export function isPrimeNumber(number: number): boolean {
    if (number === 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
export default isPrimeNumber;