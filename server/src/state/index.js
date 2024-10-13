import { PLAYER_COLORS } from '../constants';

const applicationState = {
    capturedPieces: new Map([
        [PLAYER_COLORS.BLACK, []],
        [PLAYER_COLORS.WHITE, []],
    ]),
    dragTarget: null,
    potentialDropTarget: null,
};

export default applicationState;
