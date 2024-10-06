import BasicBox from './box/index.js';

window.customElements.define('basic-box', BasicBox);

const sandboxContainer = document.getElementById('sandbox');

const basicBox = document.createElement('basic-box');

sandboxContainer.insertAdjacentElement('beforeend', basicBox);
