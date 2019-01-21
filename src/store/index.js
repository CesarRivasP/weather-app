import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'


const initialState = {
  city: 'Caracas,ve'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk)) //aqui se pasa el Middlware que se esta usando 'thunk'
);

/* En caso de no usar el devtools, se puede prescindir del composeEnhancers y
quedaria -> applyMiddleware(thunk) */
