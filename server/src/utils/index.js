import logger from './logger';

const cycleValue = ({
    startingValue, // force formatting
    minimnumValue = 1,
    lengthOfRange = 8,
}) => {
    return (
        // force formatting
        ((startingValue - minimnumValue + lengthOfRange) % lengthOfRange) + minimnumValue
    );
};

export { cycleValue, logger };
export * as builders from './builders';
