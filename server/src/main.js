import { customElementNames, wcsLogLevels } from './constants';
import { BoardSquare, GenericBox, Grid, PieceSpan } from './components/containers';
import { builders } from './utils';

window.wcsLogLevels = wcsLogLevels;

window.wcsSettings = {
    /* defaults to 'warn' */
    logLevel: 2,
};

window.customElements.define(customElementNames.BOARD_SQUARE, BoardSquare);
window.customElements.define(customElementNames.GENERIC_BOX, GenericBox);
window.customElements.define(customElementNames.GENERIC_GRID, Grid);
window.customElements.define(customElementNames.PIECE_SPAN, PieceSpan);

const sandboxContainer = document.getElementById('sandbox');
const sandboxGrid = document.createElement(customElementNames.GENERIC_GRID);

sandboxContainer.insertAdjacentElement('beforeend', builders.buildGenericBox());
sandboxContainer.querySelector('generic-box')?.insertAdjacentElement('beforeend', sandboxGrid);

builders.initializeBoard(sandboxGrid);
