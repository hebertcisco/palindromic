import { isPrimeNumber, findPrimesNumbers } from '../';

describe('findPrimalNumbers', () => {
    let primal_numbers: number[] = [];
    beforeEach(() => {
        for (let i = 1; i < 100; i++) {
            if (isPrimeNumber(i)) {
                primal_numbers.push(i);
            }
        }
    });
    it('should return all primal numbers', () => {
        const expected_result = [
            2, 3, 5, 7, 11, 13, 17, 19,
            23, 29, 31, 37, 41, 43, 47, 53,
            59, 61, 67, 71, 73, 79, 83, 89,
            97
        ];
        const result = findPrimesNumbers(primal_numbers);
        expect(result).toEqual(expected_result);
    });
});
