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
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    // Nuevo método para cuando cambie el input
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;