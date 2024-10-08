// TODO: maybe these could just get sets and the other Sets/Maps could
// be created by iterating over these ones?
const PLAYER_COLORS = new Set(['black', 'white']);
const PIECE_TYPES = new Map([
    ['king', { black: '\u{265A}', white: '\u{2654}' }],
    ['queen', { black: '\u{265B}', white: '\u{2655}' }],
    ['rook', { black: '\u{265C}', white: '\u{2656}' }],
    ['bishop', { black: '\u{265D}', white: '\u{2657}' }],
    ['knight', { black: '\u{265E}', white: '\u{2658}' }],
    ['pawn', { black: '\u{265F}', white: '\u{2659}' }],
]);

const PIECE_TYPES_SET = new Set(PIECE_TYPES);

const BLACK_PIECES = (function () {
    const blackPieces = new Map();

    // TODO: Better name than 'unicode'?
    for (const [type, unicode] of PIECE_TYPES) {
        blackPieces.set(type, unicode.black);
    }

    return blackPieces;
})();

const WHITE_PIECES = (function () {
    const whitePieces = new Map();

    // TODO: Better name than 'unicode'?
    for (const [type, unicode] of PIECE_TYPES) {
        whitePieces.set(type, unicode.white);
    }

    return whitePieces;
})();

const CHESS_PIECES = (function () {
    const chessPieces = new Map();

    for (const color of PLAYER_COLORS) {
        const piecesMap = color === 'black' ? BLACK_PIECES : WHITE_PIECES;
        chessPieces.set(color, piecesMap);
    }

    return chessPieces;
})();

export {
    PLAYER_COLORS, // force formatting
    PIECE_TYPES,
    PIECE_TYPES_SET,
    BLACK_PIECES,
    WHITE_PIECES,
    CHESS_PIECES,
};
