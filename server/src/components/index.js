import { GenericBox } from './containers';

window.customElements.define('generic-box', GenericBox);

const sandboxContainer = document.getElementById('sandbox');

const genericBox = document.createElement('generic-box');

sandboxContainer.insertAdjacentElement('beforeend', genericBox);
