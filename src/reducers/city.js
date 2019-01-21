import { SET_CITY } from '../actions'

export const city = (state = {}, action) => {
  switch (action.type){
    case SET_CITY:
      return action.payload;
      //ahora la clave city ya esta dada por el nombre del reducer, por lo que 'city' ya esta como clave
      //Por lo que solo hay que asociar su valor
    default:
      return state;
  }
}

// - state = {}; estado por defecto
