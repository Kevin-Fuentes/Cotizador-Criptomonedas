class Api{

constructor(apikey){
     this.apikey = apikey;
}
async obtenerMonedasApi(){
const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`


const urlObtenerMonedas = await fetch(url);
const monedas = await urlObtenerMonedas.json();

return{
     monedas
}
}

async obtenerValores(moneda,criptomoneda){
     const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`
     const urlConvetir=await fetch(url)
     const resultado = await urlConvetir.json()
     return{resultado}
}
}