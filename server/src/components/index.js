import { wcsLogLevels, INITIAL_STATE } from '../constants';
import { GenericBox, Grid } from './containers';

window.customElements.define('generic-box', GenericBox);
window.customElements.define('generic-grid', Grid);

// window.wcsLogLevels = new Map([
//     [0, 'debug', 0],
//     [1, 'error', 1],
//     [2, 'warn', 2],
//     [3, 'info', 3],
// ]);
window.wcsLogLevels = wcsLogLevels;

window.wcsSettings = {
    /* defaults to 'warn' */
    logLevel: 2,
};

const sandboxContainer = document.getElementById('sandbox');

const createAndGetGenericBox = () => document.createElement('generic-box');
const grid = document.createElement('generic-grid');

sandboxContainer.insertAdjacentElement('beforeend', createAndGetGenericBox());
sandboxContainer.querySelector('generic-box')?.insertAdjacentElement('beforeend', grid);

const sandboxGrid = sandboxContainer.querySelector('generic-grid');

console.dir(sandboxGrid);

const cycleValue = ({
    startingValue, // force formatting
    minimnumValue = 1,
    lengthOfRange = 8,
}) => {
    return (
        // force formatting
        ((startingValue - minimnumValue + lengthOfRange) % lengthOfRange) + minimnumValue
    );
};

const translateMapX = new Map([
    [1, '8'],
    [2, '7'],
    [3, '6'],
    [4, '5'],
    [5, '4'],
    [6, '3'],
    [7, '2'],
    [8, '1'],
]);

const translateMapY = new Map([
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
    [4, 'D'],
    [5, 'E'],
    [6, 'F'],
    [7, 'G'],
    [8, 'H'],
]);

const getPieceForStart = ({ x, y }) => {
    return INITIAL_STATE[x - 1][y - 1];
};

const buildCoordsSpan = ({ x, y }) =>
    `<span class="coords">(${translateMapX.get(x)}, ${translateMapY.get(y)})</span>`;

const buildPieceSpan = (piece) => `<span class="piece">${piece}</span>`;

let x = 1;

for (let i = 1; i <= 64; i++) {
    const y = cycleValue({ startingValue: i });
    if (i > 1 && y % 8 === 1) {
        x++;
    }
    const genericBox = createAndGetGenericBox();
    genericBox.gridCoordinates = { x, y };
    // TODO: transform `y` values to letters
    genericBox.insertAdjacentHTML('afterbegin', buildCoordsSpan({ x, y }));

    if (x < 3 || x > 6) {
        const piece = getPieceForStart({ x, y });
        genericBox.insertAdjacentHTML('beforeend', buildPieceSpan(piece));
    }

    sandboxGrid.append(genericBox);
}
