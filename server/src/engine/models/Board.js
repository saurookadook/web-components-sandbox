import { INITIAL_STATE } from '../../constants';

/**
 * @typedef {object} StateHistoryItem
 */

/**
 * @typedef Coordinates
 * @property {Number} x
 * @property {Number} y
 */

class Board {
    /**
     *
     * @param {object} args Destructured arguments
     * @param {StateHistoryItem[]} [args.stateHistory]
     */
    constructor({ state = null, stateHistory = [] }) {
        this._state = state;
        // TODO: use a better data structure for history
        this._stateHistory = stateHistory;
    }

    /**
     * @returns {StateHistoryItem}
     */
    get currentState() {
        const lastIndex = Math.max(this._stateHistory.length - 1, 0);
        return this._state || this._stateHistory[lastIndex];
    }

    /**
     * @returns {StateHistoryItem}
     */
    get previousState() {
        const i = this._stateHistory.length > 1 ? this._stateHistory.length - 2 : 0;
        return this._stateHistory[i];
    }

    /**
     * @param {Coordinates} coords
     * @returns {string|null|undefined}
     */
    stateAt(coords) {
        const { x, y } = coords;
        // TODO: add validation :]
        return this._state[x][y];
    }

    /**
     * @param {object} newState
     * @returns {void}
     */
    set addToHistory(newState) {
        this._stateHistory.push(newState);
    }

    get fullStateHistory() {
        return this._stateHistory;
    }
}

export default Board;
