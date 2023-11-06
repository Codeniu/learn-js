const template = document.createElement('template')

template.innerHTML = `
    <style>
        :host{
            container:content;
            display:inline-block;
        }
    </style>
    <div class="card">
        niu CARD CODENIU
    </div>
`

class NiuCard extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('niu-card', NiuCard)
