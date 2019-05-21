import { SET_CITY } from '../actions'

export const city = (state = {}, action) => {
  switch (action.type){
    //para detectar cuando el action tenga un type que sea igual a city, el reducer responde modificando el estado.
    case SET_CITY: //Cuando se genere una accion de este tipo, se retorna:
      // return { ...state, city: action.payload }; //cuando era el unico reducer de la app
      return action.payload;
      //ahora la clave city ya esta dada por el nombre del reducer, por lo que 'city' ya esta como clave
      //Por lo que solo hay que asociar su valor

      /*
        Un nuevo estado que se va a conformar por el estado anterior, mas el valor de la accion.
        Asi se obtiene el nuevo objeto que se necesita en este punto
      */
    default:
      return state;
  }
}

/*
- state = {}; estado por defecto
Este reducer nos va a permitir manejar la ciudad activa.
*/
