// const PLAYER_COLORS = new Set(['black', 'white']);
const PLAYER_COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};

const PIECE_NAMES = {
    KING: 'king',
    QUEEN: 'queen',
    ROOK: 'rook',
    BISHOP: 'bishop',
    KNIGHT: 'knight',
    PAWN: 'pawn',
};

const PIECE_TYPES = new Map([
    [PIECE_NAMES.KING, { black: '\u{265A}', white: '\u{2654}' }],
    [PIECE_NAMES.QUEEN, { black: '\u{265B}', white: '\u{2655}' }],
    [PIECE_NAMES.ROOK, { black: '\u{265C}', white: '\u{2656}' }],
    [PIECE_NAMES.BISHOP, { black: '\u{265D}', white: '\u{2657}' }],
    [PIECE_NAMES.KNIGHT, { black: '\u{265E}', white: '\u{2658}' }],
    [PIECE_NAMES.PAWN, { black: '\u{265F}', white: '\u{2659}' }],
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

const CHESS_PIECES = new Map([
    [PLAYER_COLORS.BLACK, BLACK_PIECES],
    [PLAYER_COLORS.WHITE, WHITE_PIECES],
]);

export {
    PLAYER_COLORS, // force formatting
    PIECE_NAMES,
    PIECE_TYPES,
    PIECE_TYPES_SET,
    BLACK_PIECES,
    WHITE_PIECES,
    CHESS_PIECES,
};
