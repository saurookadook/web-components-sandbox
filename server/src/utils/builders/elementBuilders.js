import { INITIAL_STATE, translateMapX, translateMapY } from '../../constants';
import { cycleValue } from '../index';

const buildCoordsSpan = ({ x, y }) =>
    `<span class="coords">(${translateMapX.get(x)}, ${translateMapY.get(y)})</span>`;

const buildGenericBox = () => document.createElement('generic-box');

const buildPieceSpan = (piece) => {
    const pieceSpan = document.createElement('piece-span');
    pieceSpan.piece = piece;
    return pieceSpan;
};

function initializeBoard(gridEl) {
    const getPieceForStart = ({ x, y }) => {
        return INITIAL_STATE[x - 1][y - 1];
    };

    let x = 1;

    for (let i = 1; i <= 64; i++) {
        const y = cycleValue({ startingValue: i });
        if (i > 1 && y % 8 === 1) {
            x++;
        }
        const genericBox = buildGenericBox();
        genericBox.gridCoordinates = { x, y };
        // TODO: transform `y` values to letters
        genericBox.insertAdjacentHTML('afterbegin', buildCoordsSpan({ x, y }));

        if (x < 3 || x > 6) {
            const piece = getPieceForStart({ x, y });
            genericBox.insertAdjacentElement('beforeend', buildPieceSpan(piece));
        }

        gridEl.append(genericBox);
    }
}

export { buildCoordsSpan, buildGenericBox, buildPieceSpan, initializeBoard };
