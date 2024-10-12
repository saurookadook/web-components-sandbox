import logger from '../../utils/logger';

class GenericBox extends HTMLElement {
    constructor() {
        super();
        this._className = 'GenericBox';
    }

    /**
     * @description Called when the element is connected to the DOM. If possible, custom element setup
     * should be done in this method rather than the constructor.
     */
    connectedCallback() {
        const { x = 0, y = 0 } = this._gridCoordinates || {};
        logger.debug(`${this._className} being added to the DOM...`);
        this.classList.add('box');
        // TODO: this validation should be better :]
        if (!!x && !!y) {
            Object.assign(this.style, {
                'background-color': this._getBackgroundColor(x, y),
                color: this._getColor(x, y),
            });
        }
        logger.debug(`${this._className} has been added to the DOM! :D`);
    }

    /**
     * @description Called each time the element is removed from the document.
     */
    disconnectedCallback() {
        logger.debug(`${this._className} being added to the DOM...`);
        logger.debug(`${this._className} has been removed from the DOM! :o`);
    }

    /**
     * @description Called each time the element is moved to a new document.
     */
    adoptedCallback() {
        logger.debug(`${this._className} being moved to a new document...`);
        logger.debug(`${this._className} has been moved to a new document! D:`);
    }

    /**
     * @description Called when attributes are changed, added, removed, or replaced.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes|Responding to attribute changes} for more details.
     *
     * @param {*} name
     * @param {*} oldValue
     * @param {*} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        logger.debug(
            `Attribute: ${name} has changed!
            \n---- Old Value: ${oldValue}
            \n---- New Value: ${newValue}`,
        );
    }

    get gridCoordinates() {
        return this._gridCoordinates;
    }

    set gridCoordinates({ x, y }) {
        this._gridCoordinates = { x, y };
    }

    _getBackgroundColor(x, y) {
        if (x % 2 === 0) {
            return y % 2 === 0 ? '#FFFFFF' : '#000000';
        } else {
            return y % 2 === 0 ? '#000000' : '#FFFFFF';
        }
    }

    _getColor(x, y) {
        if (x % 2 === 0) {
            return y % 2 === 0 ? '#000000' : '#FFFFFF';
        } else {
            return y % 2 === 0 ? '#FFFFFF' : '#000000';
        }
    }
}

export default GenericBox;
