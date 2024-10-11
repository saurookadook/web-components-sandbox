import { PIECE_NAMES, BLACK_PIECES, WHITE_PIECES, CHESS_PIECES } from './pieces';

// const blackPieces = CHESS_PIECES.get('black');
// const whitePieces = CHESS_PIECES.get('white');

// TODO: there's probably a more efficient way to store this :]
const INITIAL_STATE = (function () {
    const boardState = [];
    let row;

    const createEmptyRow = () => new Array(8);

    for (let i = 0; i < 8; i++) {
        switch (i) {
            case 0:
                boardState.push([
                    BLACK_PIECES.get(PIECE_NAMES.ROOK),
                    BLACK_PIECES.get(PIECE_NAMES.KNIGHT),
                    BLACK_PIECES.get(PIECE_NAMES.BISHOP),
                    BLACK_PIECES.get(PIECE_NAMES.QUEEN),
                    BLACK_PIECES.get(PIECE_NAMES.KING),
                    BLACK_PIECES.get(PIECE_NAMES.BISHOP),
                    BLACK_PIECES.get(PIECE_NAMES.KNIGHT),
                    BLACK_PIECES.get(PIECE_NAMES.ROOK),
                ]);
                break;
            case 1:
                row = createEmptyRow();
                row.fill(BLACK_PIECES.get(PIECE_NAMES.PAWN));
                boardState.push(row);
                break;
            case 6:
                row = createEmptyRow();
                row.fill(WHITE_PIECES.get(PIECE_NAMES.PAWN));
                boardState.push(row);
                break;
            case 7:
                boardState.push([
                    WHITE_PIECES.get(PIECE_NAMES.ROOK),
                    WHITE_PIECES.get(PIECE_NAMES.KNIGHT),
                    WHITE_PIECES.get(PIECE_NAMES.BISHOP),
                    WHITE_PIECES.get(PIECE_NAMES.QUEEN),
                    WHITE_PIECES.get(PIECE_NAMES.KING),
                    WHITE_PIECES.get(PIECE_NAMES.BISHOP),
                    WHITE_PIECES.get(PIECE_NAMES.KNIGHT),
                    WHITE_PIECES.get(PIECE_NAMES.ROOK),
                ]);
                break;
            default:
                boardState.push(createEmptyRow());
        }
    }

    console.log({ boardState });
    return boardState;
})();

export { INITIAL_STATE };
