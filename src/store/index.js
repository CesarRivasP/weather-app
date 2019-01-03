import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { city } from '../reducers/city';
import reducers from '../reducers'

const initialState = {
  city: 'Caracas,ve'
};

// const reducer = (state, action) => {
//   return state; //devuelve exactamente el mismo state que recibe como parametro y no hay modificacion del estado
// }

// BEFORE STORE                  before ()=> {}
// export const store = createStore(/*reducer*/city, initialState, //Generar el store
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Instalación del devtools
// );

/*
Como aqui se pasa por parametro del reducer 'city', si se le cambia el nombre a lo que retorna el reductor,
no cambia el estado, por lo que el nombre del producto del reductor debe ser  similar al que se le esta pasando
al store.
*/

//AFTER STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                                                              //aqui se pasa el Middlware que se esta usando 'thunk'
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));


//En caso de no usar el devtools, se puede prescindir del composeEnhancers y quedaria -> applyMiddleware(thunk)
