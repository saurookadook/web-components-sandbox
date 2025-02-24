/**
 * - 0: 'debug'
 * - 1: 'info'
 * - 2: 'error'
 * - 3: 'warn'
 * - 4: 'log'
 *
 * @type {('debug'|'info'|'error'|'warn'|'log')[]}
 */
const wcsLogLevels = [
    'debug',
    'info',
    'error',
    'warn',
    'log',
];

export { wcsLogLevels };

export * from './board';
export * from './elements';
export * from './pieces';
