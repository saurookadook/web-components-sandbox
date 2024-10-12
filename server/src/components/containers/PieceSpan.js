import logger from '../../utils/logger';

class PieceSpan extends HTMLSpanElement {
    constructor() {
        super();
        this._className = 'PieceSpan';
        this.draggable = true;
    }

    connectedCallback() {
        this.classList.add('piece');
        this.addEventListener('dragstart', this._onDragStart);
    }

    disconnectedCallback() {
        logger.debug(`${this._className} being added to the DOM...`);
        logger.debug(`${this._className} has been removed from the DOM! :o`);
    }

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
        console.log(
            `Attribute: ${name} has changed!
            \n---- Old Value: ${oldValue}
            \n---- New Value: ${newValue}`,
        );
    }
}

export default PieceSpan;
