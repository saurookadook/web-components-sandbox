import { GenericBox } from '.';

class Grid extends GenericBox {
    constructor({
        columns = 6, // force formatting
        minHeight = '32rem',
        minWidth = '32rem',
        rows = 6,
    }) {
        super();
        this._className = 'Grid';
        this.columns = columns;
        this.minHeight = minHeight;
        this.minWidth = minWidth;
        this.rows = rows;
    }

    connectedCallback() {
        super.connectedCallback.bind(this);
        this.classList.add('grid');
        this.style = {
            ...(this.style || {}),
            display: 'grid',
            gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
            gridTemplateRow: `repeat(${this.row}, 1fr)`,
            minHeight: this.minHeight,
            minWidth: this.minWidth,
        };
    }

    disconnectedCallback() {
        super.disconnectedCallback.bind(this);
    }

    adoptedCallback() {
        super.adoptedCallback.bind(this);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute: ${name} has changed!
            \n---- Old Value: ${oldValue}
            \n---- New Value: ${newValue}`,
        );
    }
}

export default Grid;
