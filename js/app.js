const cotizador = new Api("60c21e36af4536ad77bf0fad79c6a52b72ce1dd65aea46ec1adbc6b55071eb95")
const ui = new Interfaz()






const formulario = document.querySelector("#formulario")


formulario.addEventListener('submit',(e)=>{
     e.preventDefault()
     const monedaSelect = document.querySelector('#moneda')
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value


     const criptoMonedaSelect = document.querySelector('#criptomoneda')
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value

   

     if(!criptoMonedaSeleccionada.trim()|| !monedaSeleccionada.trim() ){
          ui.mostrarMensaje('Ambos Campos son Obligatorios','alert bg-danger text-center')

     }else{
         cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada).then((data)=>{
ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoMonedaSeleccionada);
         })
    
     }
})

