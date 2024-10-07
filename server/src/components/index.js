import { wcsLogLevels } from '../constants';
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

let y = 1;

for (let i = 1; i <= 64; i++) {
    const x = cycleValue({ startingValue: i });
    if (i > 1 && x % 8 === 1) {
        y++;
    }
    const genericBox = createAndGetGenericBox();
    genericBox.gridCoordinates = { x, y };
    genericBox.textContent = `(${x}, ${y})`;
    sandboxGrid.insertAdjacentElement('beforeend', genericBox);
}
