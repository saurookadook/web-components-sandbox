import { Board } from '../../models';

// TODO: not entirely sure what `stateHistory` should look like yet lol
const mockStateHistory = [
    'D4',
    'E4',
];

describe('Board model', () => {
    describe('it can create new instances', () => {
        test('with default args', () => {
            const mockBoard = new Board();

            expect(mockBoard).toBeInstanceOf(Board);
            expect(mockBoard.currentState).toBe(null);
            expect(mockBoard.fullStateHistory).toBe([]);
        });

        test('with existing state history', () => {
            const mockBoard = new Board({ stateHistory: mockStateHistory });

            expect(mockBoard).toBeInstanceOf(Board);
            expect(mockBoard.currentState).toBe(null);
            expect(mockBoard.fullStateHistory).toBe(mockStateHistory);
        });
    });
});
