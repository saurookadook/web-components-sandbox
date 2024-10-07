import { wcsLogLevels } from '../constants';

class Logger {
    constructor() {
        /* defaults to 'warn' */
        this.logLevel = window.wcsSettings?.logLevel || 2;
        this.logFunc = this._getFuncNameByLevelCode(this.logLevel);
    }

    log(message, levelCode = 4) {
        const logFunc =
            typeof levelCode === 'number' && wcsLogLevels[levelCode] != null
                ? this._getFuncNameByLevelCode(levelCode)
                : this.logFunc;
        if (window.wcsSettings.logLevel <= levelCode) {
            console[logFunc](message);
        }
    }

    debug(message) {
        return this.log(message, this._getLogCodeByLevelName('debug'));
    }

    error(message) {
        return this.log(message, this._getLogCodeByLevelName('error'));
    }

    warn(message) {
        return this.log(message, this._getLogCodeByLevelName('warn'));
    }

    info(message) {
        return this.log(message, this._getLogCodeByLevelName('info'));
    }

    _getLogCodeByLevelName(levelName) {
        return wcsLogLevels.indexOf(levelName);
    }

    _getFuncNameByLevelCode(level) {
        for (const levelCode of wcsLogLevels) {
            if (levelCode === level) {
                return wcsLogLevels[levelCode];
            }
        }

        return 'log';
    }
}

export default new Logger();
