import { INITIAL_STATE, customElementNames, translateMapX, translateMapY } from '../../constants';
import { cycleValue } from '../index';

const buildBoardSquare = () => document.createElement(customElementNames.BOARD_SQUARE);

const buildCoordsSpan = ({ x, y }) =>
    `<span class="coords">(${translateMapX.get(x)}, ${translateMapY.get(y)})</span>`;

const buildGenericBox = () => document.createElement(customElementNames.GENERIC_BOX);

const buildPieceSpan = (piece) => {
    const pieceSpan = document.createElement(customElementNames.PIECE_SPAN);
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
        const boardSquare = buildBoardSquare();
        boardSquare.gridCoordinates = { x, y };
        // TODO: transform `y` values to letters
        boardSquare.insertAdjacentHTML('afterbegin', buildCoordsSpan({ x, y }));

        if (x < 3 || x > 6) {
            const piece = getPieceForStart({ x, y });
            boardSquare.insertAdjacentElement('beforeend', buildPieceSpan(piece));
        }

        gridEl.append(boardSquare);
    }
}

export { buildBoardSquare, buildCoordsSpan, buildGenericBox, buildPieceSpan, initializeBoard };
