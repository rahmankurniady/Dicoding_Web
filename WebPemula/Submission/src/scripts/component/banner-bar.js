class BannerBar extends HTMLElement{

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
        .jumbotron{
            color: black;
            display: flex;
        }
        
        .sub-text-header{
            font-size: 12pt;
        }
        
        .img-logo{
            width: 150pt;
           max-height: auto;
           object-fit:cover;
           object-position: center;
        }
        
        .header-left{
            flex : left;
            width :50%;
        }
       
        .header-left a{
           display: none; 
       }
       
        .header-right{
            padding-left: 5%;
            flex : right;
            width : 50%;
            margin: auto;
        }
        
        .header-right a{
            font-size:48pt; 
            font-weight: bold;
        }
        
        .header-right p{
            width:80%;
        }
        
        .header-image {
           width: 100%;
           max-height: 100vh;
           object-fit:cover;
           object-position: center;
        }
        
        .flex-right{
            float : right;
            width : 40%;
        }
        
        .flex-left{
            float : left;
            width : 60%;
        }
       
       .img-logo{
           width: 150pt;
          max-height: auto;
          object-fit:cover;
          object-position: center;
       }

       /*Responsive*/
       @media screen and (max-width: 680px) {
            .header-image {
                height: 100vh;
                object-fit:cover;
                object-position: center;
            
                }
        
            .jumbotron{
                flex-direction: column;
                display: flex;
            }
        
        
        
            header .icon {
                float: left;
                display: block;
            }	
            
            .header-left{
                width :100%;	
                font-size: 13px;
            }
        
            .header-left a{
                display : block;
                position: absolute;
                bottom: 20px;
                left: 20px;
                margin: 0;
                font-size:2.5em; 
                font-weight: bold;
            }
        
            .header-right{
                width : 90%;
                margin: auto;
                padding-right: 10px;
            }
        
            .header-right a{
                display : none;
                font-size:2em; 
                font-weight: bold;
            }
        
            .header-right p{
                width:100%;
            }
        }
        </style>
        <div class="jumbotron " id="header">
            <div class="header-left">
            <img src="./public/images/header2.png" class="header-image">
            <a>Lawan COVID-19<br> 
            Indonesia Bisa </a> 
            </div>
            <div class="header-right">
            <div> 
                <a>Lawan COVID-19<br> 
                Indonesia Bisa </a> 
            </div>
            <br> 
            <div class="sub-text-header">Supported by 
                <br> <img src ="./public/images/icon-kitabisa.png" class="img-logo">
            </div>       
            <br> <p>Program ini digunakan untuk mensupport tenaga medis di Indonesia untuk Melawan virus Corona, bekerja sama dengan Kitabisa.com. Dana yang terkumpul dari program ini akan digunakan untuk membelikan perlengkapan medis APD, masker, obat-obatan dan sembako</p>
            <br>
            </div>
        </div>
        
        

        `;
    }
}

customElements.define("banner-bar", BannerBar);