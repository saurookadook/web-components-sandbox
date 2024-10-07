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
        console.log(`${this._className} being added to the DOM...`);
        this.classList.add('box');
        console.log(`${this._className} has been added to the DOM! :D`);
    }

    /**
     * @description Called each time the element is removed from the document.
     */
    disconnectedCallback() {
        console.log(`${this._className} being added to the DOM...`);
        console.log(`${this._className} has been removed from the DOM! :o`);
    }

    /**
     * @description Called each time the element is moved to a new document.
     */
    adoptedCallback() {
        console.log(`${this._className} being moved to a new document...`);
        console.log(`${this._className} has been moved to a new document! D:`);
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

export default GenericBox;
