import * as mattarella from "../source";

let consoleLogSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

describe('Unit tests', () => {

    beforeAll(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    beforeEach(() => {
        consoleLogSpy.mockClear();
    });

    const testCases: { function: string; expected: string | string[], iterations: number }[] = [
        { function: 'chuckNorris', expected: 'Purtroppo non sono italiano', iterations: 2 },
        { function: 'napolitano', expected: 'Se fossi Benjamin Button sarebbe una scelta lungimirante...', iterations: 2 },
        { function: 'roccoSiffredi', expected: 'Minchia mi voti che non sai manco come mi chiamo', iterations: 2 },
        { function: 'berlusconi', expected: 'Ma diocan', iterations: 2 },
        { function: 'razzi', expected: 'Ma io non credo', iterations: 2 },
        { function: 'albertoAngela', expected: 'Magari', iterations: 2 },
        {
            function: 'mattarella', expected: [
                'NO!',
                'Sono stufo',
                'Ma voglio diventare un barbiere, che alla prossima pandemia sennò sono ancora fregato',
                'Se rimango i leghisti mi mandano via con un barcone',
                'Ti dugnu na boffa ca ppi daritinni n\'autra t\'avi a veniri a circari a scientifica',
                'E vabbene, ma stavolta mi dovete dare il barbiere aggratis'
            ], iterations: 7
        },
    ];

    for (const testCase of testCases) {
        it(`Test function "${testCase.function}"`, () => {
            let expecteds = Array.isArray(testCase.expected) ? testCase.expected : Array(testCase.iterations).fill(testCase.expected);
            if (expecteds.length < testCase.iterations) {
                const diff = testCase.iterations - expecteds.length;
                const lastExpected = expecteds[expecteds.length - 1];
                expecteds = expecteds.concat(Array(diff).fill(expecteds[expecteds.length - 1]));
            }
            for (const expected of expecteds) {
                mattarella[testCase.function]();
                expect(consoleLogSpy).toHaveBeenLastCalledWith(expected);
            }
            expect(consoleLogSpy).toHaveBeenCalledTimes(testCase.iterations);
        });
    }

    afterAll(() => {
        consoleLogSpy.mockRestore();
    });

});