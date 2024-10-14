import { wcsLogLevels } from './constants';
import { GenericBox, Grid, PieceSpan } from './components/containers';
import { builders } from './utils';

window.wcsLogLevels = wcsLogLevels;

window.wcsSettings = {
    /* defaults to 'warn' */
    logLevel: 2,
};

window.customElements.define('generic-box', GenericBox);
window.customElements.define('generic-grid', Grid);
window.customElements.define('piece-span', PieceSpan);

const sandboxContainer = document.getElementById('sandbox');
const sandboxGrid = document.createElement('generic-grid');

sandboxContainer.insertAdjacentElement('beforeend', builders.buildGenericBox());
sandboxContainer.querySelector('generic-box')?.insertAdjacentElement('beforeend', sandboxGrid);

builders.initializeBoard(sandboxGrid);
