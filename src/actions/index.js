export const SET_CITY = 'SET_CITY';
const api_key = "2655d1ef49563a6f6be6cd4971b05085";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setCity = (payload) => ({ type: SET_CITY, payload });

export const fetchForecast = (payload) => {
  //se declara asi gracias al middlware
  return dispatch => {  //aqui se genera una funcion que tiene como parametro 'dispatch'
  //  const url_forecast= `${url}?q=${city}&appid=${api_key}`;

    //accion inicial -> para establecer que se esta ajecutando una busqueda
    // por lo que se va a activar en el estado un indicador de busqueda de datos




    // fetch(url_forecast)
    //   .then(data => (data.json()))
    //   .then(weather_data => {
    //   //  const forecastData = transformForecast(weather_data)
    //     // modificar el estado con el resultado de la promise (http request== fetch)
    //   })
  };
};

// Por convencion, en vez de de 'value' se denomina 'payload'.
