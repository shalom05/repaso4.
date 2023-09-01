class Button extends HTMLElement {

    static get observedAttributes(){
        return["message"];
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    connectedCallback(){
        this.mount();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.mount();
    }

    mount(){
        this.render();
        this.addListener();
    }

    addListener(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked);
    }

    onButtonClicked(){
        const currentValue = this.getAttribute("message");
        this.setAttribute("message","Gracias por el like");

    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/Button/Button.css">
        <section>
        <p>${this.message}</p>
        <button>Da like</button>
        </section>`
    }
}

customElements.define("my-button",Button);
export default Button;