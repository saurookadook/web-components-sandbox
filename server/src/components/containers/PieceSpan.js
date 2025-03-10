import applicationState from '../../state';
import logger from '../../utils/logger';

class PieceSpan extends HTMLElement {
    static get observedAttributes() {
        return ['piece'];
    }

    constructor() {
        super();
        this._className = 'PieceSpan';
        this._piece = null;
        this._internals = this.attachInternals();
    }

    connectedCallback() {
        logger.debug(`${this._className} being added to the DOM...`);

        this.classList.add('piece');
        this.textContent = this._piece.unicode;
        this.draggable = true;

        this.addEventListener('dragstart', this._onDragStart);
        this.addEventListener('dragend', this._onDragEnd);

        logger.debug(`${this._className} has been added to the DOM! :D`);
    }

    disconnectedCallback() {
        logger.debug(`${this._className} being removed from the DOM...`);
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
        logger.log(
            `Attribute: ${name} has changed!
            \n---- Old Value: ${oldValue}
            \n---- New Value: ${newValue}`,
        );
    }

    _onDragStart(event) {
        applicationState.dragTarget = this;
        logger.debug('PieceSpan._onDragStart: ', { applicationState, event });
    }

    _onDragEnd(event) {
        applicationState.dragTarget = null;
        logger.debug('PieceSpan._onDragEnd: ', { applicationState, event });
    }

    get piece() {
        return this._piece;
    }

    set piece(value) {
        this._piece = value;
    }
}

export default PieceSpan;
