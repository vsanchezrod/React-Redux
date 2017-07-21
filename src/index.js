import React from 'react';
import ReactDOM from 'react-dom';

// Creamos una constante, que va a ser la KEY DEL API de Youtube. No va a cambiar
const API_KEY = 'AIzaSyABvZR95mHIj30vRfV0OzKhVJPSg03oYUo';


// Creamos un nuevo componente que producirá cídigo HTML
// Create a new Compoment. This Compoment should produce some HTML
const App = function () {
  return <div>Hi!</div>;
}





// Tenemos que hacer que meta ese componente nuevo creado en la página (en el DOM)
// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
