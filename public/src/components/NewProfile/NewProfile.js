class NewProfile extends HTMLElement {

    static get observedAttributes(){
        return["name","city","uid","email"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();

    }

    render(){
            this.shadowRoot.innerHTML =`
            <link rel="stylesheet" href="./src/components/NewProfile/NewProfile.css">
            <section>
            <h1>${this.name}</h1>
            <p><strong>From: ${this.city}</strong></p>
            <p>ID: ${this.uid}</p>
            <p>Email: ${this.email}</p>
            
            </section>`

        
    }

    
}

customElements.define("my-profile",NewProfile);
export default NewProfile;