import { createStore } from 'redux';


export const store = createStore(()=> {}, //Generar el store
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Instalación del devtools
);
