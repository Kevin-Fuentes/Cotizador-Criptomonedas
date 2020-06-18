class Interfaz {

     constructor(){
          this.init()
     }

     init(){
          this.construirSelect()
     }
async construirSelect(){
     const  moneda = await cotizador.obtenerMonedasApi()
    
    const monedas = Object.entries(moneda.monedas.Data)

    const select =  document.querySelector('#criptomoneda')
 for(const [key,value] of monedas){
      
const option = document.createElement('option')
option.value = value.Symbol
option.appendChild(document.createTextNode(value.CoinName))
select.appendChild(option)
 }
}

     mostrarMensaje(mensaje,clases){
const div = document.createElement('div')
div.className = clases;
div.appendChild(document.createTextNode(mensaje))

const divMensaje= document.querySelector('.mensajes')
divMensaje.appendChild(div)
     setTimeout(() => {
        document.querySelector (".mensajes div").remove()
     }, 3000);
     }

    async  mostrarResultado(resultado,moneda,cripto){
     //    const resultadoAnterior = document.querySelector('#resultado>div')
     //    if(resultadoAnterior
     //      ){
     //      resultadoAnterior.remove()
     //      }
       const rMoneda=  await resultado[cripto][moneda]
   
let precio =  rMoneda.PRICE.toFixed(2)
let id =  rMoneda.TOSYMBOL,porcentaje = rMoneda.CHANGEPCTDAY.toFixed(2), fecha =  new Date(rMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX'),Moneda = rMoneda.FROMSYMBOL
;
          let templateHtml = `
          <div class = "card bg-warning">
          <div class="card-body text-light"> 
          <h2 class= "card-title">Resultado:</h2>
          <p>El precio de ${Moneda} a moneda ${id} es de : $${precio}</p>
          <p>variacion ultimo dia: %${porcentaje}</p>
          <p>Ultima actualizacion: ${fecha}</p>
          </div>
          </div>
          `
          this.motrarOcultarSpinner('block') 
          setTimeout(() => {
               document.querySelector('#resultado').innerHTML = templateHtml    
               this.motrarOcultarSpinner('none') 
          }, 3000);
         
      
     }
            motrarOcultarSpinner(value){
const spinner = document.querySelector('.contenido-spinner')

spinner.style.display = value
            }
}