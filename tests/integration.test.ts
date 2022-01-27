import * as mattarella from "../source";

let consoleLogSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

describe('Unit tests', () => {

    beforeAll(() => {
        consoleLogSpy = jest.spyOn(console, 'log');
    });

    beforeEach(() => {
        consoleLogSpy.mockClear();
    });

    const runs: { function: string; expected: string, iterations: number, special?: boolean }[] = [
        { function: 'chuckNorris', expected: 'Purtroppo non sono italiano', iterations: 2 },
        { function: 'napolitano', expected: 'Se fossi Benjamin Button sarebbe una scelta lungimirante...', iterations: 2 },
        { function: 'roccoSiffredi', expected: 'Minchia mi voti che non sai manco come mi chiamo', iterations: 2 },
        { function: 'berlusconi', expected: 'Ma diocan', iterations: 2 },
        { function: 'mattarella', expected: 'NO!', iterations: 1 },
        { function: 'razzi', expected: 'Ma io non credo', iterations: 2 },
        { function: 'albertoAngela', expected: 'Magari', iterations: 2 },
        { function: 'mattarella', expected: 'Sono stufo', iterations: 1 },
        { function: 'mattarella', expected: 'Ma voglio diventare un barbiere, che alla prossima pandemia sennò sono ancora fregato', iterations: 1 },
        { function: 'mattarella', expected: 'Se rimango i leghisti mi mandano via con un barcone', iterations: 1 },
        { function: 'napolitano', expected: 'Se fossi Benjamin Button sarebbe una scelta lungimirante...', iterations: 2 },
        { function: 'roccoSiffredi', expected: 'Minchia mi voti che non sai manco come mi chiamo', iterations: 2 },
        { function: 'mattarella', expected: `Ti dugnu na boffa ca ppi daritinni n'autra t'avi a veniri a circari a scientifica`, iterations: 1 },
        { function: 'roccoSiffredi', expected: 'Minchia mi voti che non sai manco come mi chiamo', iterations: 2 },
        { function: 'mattarella', expected: 'E vabbene, ma stavolta mi dovete dare il barbiere aggratis', iterations: 5 },
        { function: 'chuckNorris', expected: 'Lunga vita {}!', iterations: 5, special: true },
        { function: 'napolitano', expected: 'Lunga vita {}!', iterations: 5, special: true },
        { function: 'roccoSiffredi', expected: 'Lunga vita {}!', iterations: 5, special: true },
        { function: 'berlusconi', expected: 'Lunga vita {}!', iterations: 5, special: true },
        { function: 'razzi', expected: 'Lunga vita {}!', iterations: 5, special: true },
        { function: 'albertoAngela', expected: 'Lunga vita {}!', iterations: 5, special: true }
    ];

    it(`Do integration test`, () => {
        for (const run of runs) {
            for (let i = 0; i < run.iterations; i++) {
                if (run.special) {
                    const rettiliano = i % 2 === 0;
                    const spy = jest.spyOn(Math, 'random').mockReturnValue(rettiliano ? 0.9 : 0.1);
                    mattarella[run.function]();
                    expect(consoleLogSpy).toHaveBeenLastCalledWith(run.expected.replaceAll('{}', rettiliano ? 'al rettiliano' : 'a Mattarella'));
                    spy.mockRestore();
                }
                else {
                    mattarella[run.function]();
                    expect(consoleLogSpy).toHaveBeenLastCalledWith(run.expected);
                }
            }
            expect(consoleLogSpy).toHaveBeenCalledTimes(run.iterations);
            consoleLogSpy.mockClear();
        }
    });

    afterAll(() => {
        consoleLogSpy.mockRestore();
    });

});