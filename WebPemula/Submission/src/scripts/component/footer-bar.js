class FooterBar extends HTMLElement{

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .footer {
            padding: 10px;
            background-color: #1eb7fa;
            text-align: center;
            font-weight: bold;
         }
        </style>
        <div class="footer">
        Lawan Covid-19 &#169; 2020, Rahman Kurniady  
        </div>
        

        `;
    }
}

customElements.define("footer-bar", FooterBar);