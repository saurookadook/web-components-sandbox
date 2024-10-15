import {
    PLAYER_COLORS, // force formatting
    PIECE_NAMES,
    PIECE_TYPES,
    PIECE_TYPES_KEYS,
    CHESS_PIECES,
} from '../../../constants/pieces';
import { Piece } from '../../models';

describe('Piece model', () => {
    describe('it can create new instances', () => {
        test('for black', () => {
            const mockPiece = new Piece({
                color: PLAYER_COLORS.BLACK,
                type: PIECE_NAMES.QUEEN,
            });

            expect(mockPiece).toBeInstanceOf(Piece);
            expect(mockPiece.color).toBe(PLAYER_COLORS.BLACK);
            expect(mockPiece.type).toBe(PIECE_NAMES.QUEEN);
            expect(mockPiece.unicode).toBe(
                CHESS_PIECES.get(PLAYER_COLORS.BLACK).get(PIECE_NAMES.QUEEN),
            );
        });

        test('for white', () => {
            const mockPiece = new Piece({
                color: PLAYER_COLORS.WHITE,
                type: PIECE_NAMES.ROOK,
            });

            expect(mockPiece).toBeInstanceOf(Piece);
            expect(mockPiece.color).toBe(PLAYER_COLORS.WHITE);
            expect(mockPiece.type).toBe(PIECE_NAMES.ROOK);
            expect(mockPiece.unicode).toBe(
                CHESS_PIECES.get(PLAYER_COLORS.WHITE).get(PIECE_NAMES.ROOK),
            );
        });
    });
});
