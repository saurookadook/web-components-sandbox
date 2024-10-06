class GenericBox extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * @description Called when the element is connected to the DOM. If possible, custom element setup
     * should be done in this method rather than the constructor.
     */
    connectedCallback() {}

    /**
     * @description Called each time the element is removed from the document.
     */
    disconnectedCallback() {}

    /**
     * @description Called each time the element is moved to a new document.
     */
    adoptedCallback() {}

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
            \n---- New Value: ${newValue}`
        );
    }
}

export default GenericBox;
