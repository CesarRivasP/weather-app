import { createStore } from 'redux';
import { city } from '../reducers/city';

const initialState = {
  city: 'Caracas,ve'
};

// const reducer = (state, action) => {
//   return state; //devuelve exactamente el mismo state que recibe como parametro y no hay modificacion del estado
// }
                            /* after ()=> {}*/
export const store = createStore(/*reducer*/city, initialState, //Generar el store
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Instalación del devtools
);


/*
Como aqui se pasa por parametro del reducer 'city', si se le cambia el nombre a lo que retorna el reductor,
no cambia el estado, por lo que el nombre del producto del reductor debe ser  similar al que se le esta pasando
al store.
*/
