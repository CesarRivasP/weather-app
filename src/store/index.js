import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { city } from '../reducers/city';
import reducers from '../reducers'

const initialState = {
  city: 'Caracas,ve'
};

// BEFORE STORE                  before ()=> {}
// export const store = createStore(/*reducer*/city, initialState, //Generar el store
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Instalación del devtools
// );

//AFTER STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                                                              //aqui se pasa el Middlware que se esta usando 'thunk'
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

//En caso de no usar el devtools, se puede prescindir del composeEnhancers y quedaria -> applyMiddleware(thunk)
