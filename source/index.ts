let mattarellaCounts = 0;
const mattarellaThreshold = 5;
const alreadyElectedText = () => Math.floor(Math.random() * 2) % 2 ? 'Lunga vita al rettiliano!' : 'Lunga vita a Mattarella!';

function alreadyElectedMiddleware(text: string): void {
    if (mattarellaCounts >= mattarellaThreshold) {
        console.log(alreadyElectedText());
    }
    else {
        console.log(text);
    }
}

export function mattarella(): void {
    switch (mattarellaCounts) {
        case 0:
            console.log('NO!');
            break;
        case 1:
            console.log('Sono stufo');
            break;
        case 2:
            console.log('Ma voglio diventare un barbiere, che alla prossima pandemia sennò sono ancora fregato');
            break;
        case 3:
            console.log('Se rimango i leghisti mi mandano via con un barcone');
            break;
        case 4:
            console.log(`Ti dugnu na boffa ca ppi daritinni n'autra t'avi a veniri a circari a scientifica`);
            break;
        default:
            console.log('E vabbene, ma stavolta mi dovete date il barbiere aggratis');
            break;
    }
}

export function chuckNorris(): void {
    alreadyElectedMiddleware('Purtroppo non sono italiano');
}

export function napolitano(): void {
    alreadyElectedMiddleware('Se fossi Benjamin Button sarebbe una scelta lungimirante...');
}

export function roccoSiffredi(): void {
    alreadyElectedMiddleware('Minchia mi voti che non sai manco come mi chiamo');
}

export function berlusconi(): void {
    alreadyElectedMiddleware('Ma diocan');
}

export function razzi(): void {
    alreadyElectedMiddleware('Ma io non credo');
}

export function albertoAngela(): void {
    alreadyElectedMiddleware('Magari');
}
