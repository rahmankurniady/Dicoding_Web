function main() {

    const baseUrl = "https://covid19.mathdro.id/api/countries/Indonesia";
   
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const getCase= async () => {
        try {
            const response = await fetch(baseUrl);
            const responseJson = await response.json();
            if(responseJson.error) {
               showResponseMessage(responseJson.message);
            } else {
                renderCase(responseJson);
            }
          } catch(error) {
             showResponseMessage(error);
          }
    };

    const renderCase = (cases) => {
        let perawatan = cases.confirmed.value-((cases.recovered.value)+(cases.deaths.value));

        const listBookElement = document.querySelector("#update");
        listBookElement.innerHTML = `
        <h2 style="text-align: center">Update Informasi Terkini di Indonesia</h2>
        <div class="flex-data-actual">
          <div class="konfirmasi content-flex"> <a>${cases.confirmed.value}</a> <br> Terkonfirmasi</div>
          <div class="perawatan content-flex"> <a>${perawatan}</a> <br> Perawatan</div>
          <div class="sembuh content-flex"> <a>${cases.recovered.value}</a> <br> Sembuh</div>
          <div class="meninggal content-flex"><a>${cases.deaths.value}</a> <br> Meninggal</div>
        </div>
        <div>  Pembaruan Terakhir :${cases.lastUpdate} </div>    
        `;    
    };

    getCase();
 
}

   
  
export default main;
