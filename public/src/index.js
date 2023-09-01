import * as components from "./components/indexH.js"
import data from "./data.js"

class AppContainer extends HTMLElement {


    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((user)=> {
        this.shadowRoot.innerHTML += `
        <my-profile name="${user.name}" city="${user.address.city}" uid="${user.uid}" email="${user.email}"></my-profile>
        <my-button message="Define tu like"></my-button>
        `
    }   
        )}

}

customElements.define("app-container",AppContainer);