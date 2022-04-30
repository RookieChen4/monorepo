export default class cjhButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const text = document.createElement('span');
    text.textContent = 'Hi Custom Element!';
    shadowRoot.append(text);
  }
}

customElements.define('cjh-button2', cjhButton);
