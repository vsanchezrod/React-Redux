import React, {Component} from 'react';

// Aquí definiamos un componente funcional, pero ahora lo vamos a convetir en un componente de clase
/*const SearchBar = () => {
    return <input />;
}*/

// Creo la clase
class SearchBar extends Component {
    // Creo el metodo para el render (es como una función y devuelve código HTML)
    render (){
        return <input onChange={(event) => console.log(event.target.value)} />;
    }
    
    // HANDLING EVENTS (2 pasos).
    // 1. Creo el evento, para poder saber que es lo que el usuario introduce en el buscador.
    // 2. Paso el evento al elemento.
    /*onInputChange(event){
        console.log(event.target.value);
    }*/

}






export default SearchBar;