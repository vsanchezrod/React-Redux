import React, {Component} from 'react';

// Aquí definiamos un componente funcional, pero ahora lo vamos a convetir en un componente de clase
/*const SearchBar = () => {
    return <input />;
}*/

// Creo la clase
class SearchBar extends Component {
    // STATE
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    // Creo el metodo para el render (es como una función y devuelve código HTML)
    render (){
        return(
            <div>
                <input
                    value = {this.state.term}
                    onChange = {event => this.setState({ term: event.target.value })} />
                    Value of the input: {this.state.term}
            </div>
        );
    }

}

export default SearchBar;