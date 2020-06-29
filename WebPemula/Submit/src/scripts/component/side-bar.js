class SideBar extends HTMLElement{

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
        .contact-profil{
            display: flex;
            padding: 20px 20px 20px 20px;
        }
        
        .flex-left{
            width: 70%;
        }
        
        .flex-right{
            width: 30%;
        }
        
        .info-contact {
          border-radius: 5px;
          background-color: #f2f2f2;
          padding: 20px;
        }
        
        .foto-profil{
            width: 100%;
            max-width: 25vh;
               max-height: auto;
               object-fit:cover;
            object-position: center;
            border-radius: 50%;
        }
        
        input[type=text], select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        
        input[type=number], select {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
        
        input[type=submit] {
          width: 100%;
          background-color: #1eb7fa;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        textarea{
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        
        input[type=submit]:hover {
          background-color: #40e0d0;
        }
        
        .profil{
            object-position: center;
            padding: 10px 10px 10px 10px;
        }
        
        .t-profil{
           width: 100%;
           max-height: 100vh;
           object-fit:cover;
           object-position: center;
           border : 1px solid black;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        
        @media screen and (max-width: 680px) {

            .contact-profil{
                flex-direction: column;
            }
        
            .flex-left, .flex-right{
                width: 100%;
            }
        
            .info-contact {
                width: 95%;
                border-radius: 5px;
                background-color: #f2f2f2;
                padding: 10px 10px 10px 10px;
            }
        }
        </style>
        <div class="contact-profil">
        <div class="info-contact flex-left">
          <h2>Kontak</h2>
          <form>
            <label for="Email">Email</label>
            <input type="text" id="Email" placeholder="Email">

            <label for="No_Telpon">Nomer Telpon</label>
            <input type="number" id="Nomer_Telpon" placeholder="Nomer Telpon">

            <label for="Subject">Subject</label>
            <input type="text" id="Subject" placeholder="Subject">

            <label for="Pesan">Pesan</label>
            <textarea rows="20" placeholder="Pesan..."></textarea>

            <input type="submit" value="Kirim">
          </form>
        </div>

        <div class="profil flex-right">
          <figure>
            <center>
            <img src="./public/images/profil.PNG" alt="foto-profil" class="foto-profil">
            </center>
          </figure>
          <table class="t-profil">
            <tr>
              <td colspan= "2"><center><h2>Data Diri</h2></center></td>
            </tr>
            <tr>
              <td width="30%"> Nama </td>
              <td width="70%"> : Rahman Kurniady </td>
            </tr>
            <tr>
              <td> Email</td>
              <td> : rahmankurniady@gmail.com </td>
            </tr>
            <tr>
              <td> Alamat    </td>
              <td> : Sapo Kebagusan, Jalan Kebagusan 2 no 2A RT 2 RW 7 Kebagusan, Pasar Minggu, Jakarta Selatan </td>
            </tr>
            <tr>
              <td> No Telpon </td>
              <td> : 085643717850 </td>
            </tr>
          </table>
        </div>
    </div>
        

        `;
    }
}

customElements.define("side-bar", SideBar);