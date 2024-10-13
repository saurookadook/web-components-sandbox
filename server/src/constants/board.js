import { PLAYER_COLORS, PIECE_NAMES, BLACK_PIECES, WHITE_PIECES } from './pieces';
import { Piece } from '../engine/models';

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
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.ROOK,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.KNIGHT,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.BISHOP,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.QUEEN,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.KING,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.BISHOP,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.KNIGHT,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.ROOK,
                    }),
                ]);
                break;
            case 1:
                row = createEmptyRow();
                row.fill(
                    new Piece({
                        color: PLAYER_COLORS.BLACK,
                        type: PIECE_NAMES.PAWN,
                    }),
                );
                boardState.push(row);
                break;
            case 6:
                row = createEmptyRow();
                row.fill(
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.PAWN,
                    }),
                );
                boardState.push(row);
                break;
            case 7:
                boardState.push([
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.ROOK,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.KNIGHT,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.BISHOP,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.QUEEN,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.KING,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.BISHOP,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.KNIGHT,
                    }),
                    new Piece({
                        color: PLAYER_COLORS.WHITE,
                        type: PIECE_NAMES.ROOK,
                    }),
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
