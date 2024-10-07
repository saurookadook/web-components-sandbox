import { GenericBox } from '.';
import logger from '../../utils/logger';

class Grid extends GenericBox {
    constructor() {
        super();
        this._className = 'Grid';
        this.columns = 8; // force formatting
        // this.gridGap = '0.5rem';
        // this.padding = '1rem';
        this.rows = 8;
    }

    connectedCallback() {
        logger.debug(`${this._className} being added to the DOM...`);
        // super.connectedCallback.bind(this);
        this.classList.add('grid');
        Object.assign(this.style, {
            ...(this.style || {}),
            // display: 'grid',
            // 'grid-gap': this.gridGap,
            'grid-template-columns': `repeat(${this.columns}, var(--grid-box-size))`,
            'grid-template-row': `repeat(${this.rows}, var(--grid-box-size))`,
            // 'padding-top': this.padding,
            // 'padding-right': this.padding,
            // 'padding-bottom': this.padding,
            // 'padding-left': this.padding,
        });
        logger.debug(`${this._className} has been added to the DOM! :D`);
        return this;
    }

    disconnectedCallback() {
        super.disconnectedCallback.bind(this);
    }

    adoptedCallback() {
        super.adoptedCallback.bind(this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        logger.log(
            `Attribute: ${name} has changed!
            \n---- Old Value: ${oldValue}
            \n---- New Value: ${newValue}`,
        );
    }
}

export default Grid;
