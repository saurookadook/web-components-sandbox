import applicationState from '../../state';
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
        logger.debug(`${this._className} being added to the DOM...`);

        const { x = 0, y = 0 } = this._gridCoordinates || {};

        this.classList.add('box');
        // TODO: this validation should be better :]
        if (!!x && !!y) {
            this.classList.add(this.squareColorClass(x, y));
            this.addEventListener('dragenter', this._onDragEnter);
            this.addEventListener('dragover', (e) => e.preventDefault());
            this.addEventListener('drop', this._onDrop);
        }
        logger.debug(`${this._className} has been added to the DOM! :D`);
    }

    /**
     * @description Called each time the element is removed from the document.
     */
    disconnectedCallback() {
        logger.debug(`${this._className} being removed from the DOM...`);
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

    _onDragEnter(event) {
        // TODO: may not need this...?
        applicationState.potentialDropTarget = this;
        logger.debug('GenericBox._onDragEnter: ', {
            applicationState,
            event,
            gridCoordinates: this._gridCoordinates,
        });
        event.preventDefault();
    }

    _onDrop(event) {
        logger.debug('GenericBox._onDrop: ', { applicationState, event });

        const dropTarget =
            event.target.tagName !== 'GENERIC-BOX' ? event.currentTarget : event.target;
        const dropTargetChildren = Array.from(dropTarget.children || []);
        const { dragTarget } = applicationState;

        const { color: dragTargetColor } = dragTarget.piece;
        const existingPieceEl = dropTargetChildren.find((el) => el.tagName === 'PIECE-SPAN');

        if (existingPieceEl) {
            applicationState.capturedPieces.get(dragTargetColor).push(existingPieceEl.piece);
            existingPieceEl.parentNode.removeChild(existingPieceEl);
        }

        dragTarget.parentNode.removeChild(dragTarget);
        dropTarget.appendChild(dragTarget);
    }

    squareColorClass(x, y) {
        if (x % 2 === 0) {
            return y % 2 === 0 ? 'white' : 'black';
        }

        return y % 2 === 0 ? 'black' : 'white';
    }

    _hasValidCoordinates({ x, y }) {
        return this._isValidCoordinate(x) && y > 0;
    }

    _isValidCoordinate(val) {
        return (
            val != null &&
            ((typeof val === 'number' && val >= 1 && val <= 8) ||
                (typeof val === 'string' && val !== ''))
        );
    }

    get gridCoordinates() {
        return this._gridCoordinates;
    }

    set gridCoordinates({ x, y }) {
        this._gridCoordinates = { x, y };
    }
}

export default GenericBox;
