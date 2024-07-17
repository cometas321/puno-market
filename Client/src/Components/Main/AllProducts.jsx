import React from 'react'
import {ApiClient} from "../../api/services" //importas el ApiClient que manejara las solicitudes HTTP del proyecto
 

//Esta componente representaria la grilla de card 
const Products = () => {
  // instancias la clase que creamos en api.js para hacer las peticiones HTTP con axios
  const apiClient = new ApiClient();


  //Este es un ejemplo como se haria na petición utilizando alguna de las funciones que creemos en el api client.
  const response = await apiClient.getAllProducts();

  // con esos datos seguro debieras guardarlos en un estado para luego hacer mapeo y renderizar todas las card
  return (
    <div>Products</div>
  )
}

export default Products