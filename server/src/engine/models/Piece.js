import {
    PLAYER_COLORS, // force formatting
    PIECE_TYPES,
    PIECE_NAMES_SET,
    CHESS_PIECES,
} from '../../constants/pieces';

class Piece {
    constructor({ color, type }) {
        if (this._areValidOptions({ color, type })) {
            this._color = color;
            this._type = type;
            this._unicode = CHESS_PIECES.get(color).get(type);
        }
    }

    get color() {
        return this._color;
    }

    get type() {
        return this._type;
    }

    get unicode() {
        return this._unicode;
    }

    _areValidOptions({ color, type }) {
        let areValid = false;
        let exception = null;

        try {
            areValid = this._isValidColor(color) && this._isValidType(type);
        } catch (e) {
            exception = e;
        }

        if (!areValid) {
            throw exception || new TypeError('Color and/or type is invalid!');
        }

        return areValid;
    }

    _isValidColor(color) {
        if (!Object.values(PLAYER_COLORS).includes(color)) {
            throw TypeError(`Argument for 'color' (${color} - type ${typeof color}) is invalid!`);
        }
        return true;
    }

    _isValidType(type) {
        if (!PIECE_NAMES_SET.has(type)) {
            throw TypeError(`Argument for 'type' (${type} - type ${typeof type}) is invalid!`);
        }
        return true;
    }
}

export default Piece;
