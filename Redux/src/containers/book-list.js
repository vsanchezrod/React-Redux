// Vamos a crear un nuevo componente con react para renderizar la lista de libros
import React, {Component} from 'react';
// Importamos librería de react-redux para poder pasar de componente a container
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((books) => {
            return (
                <li key={books.title} className="list-group-item">{books.title}></li>
            );
        });
    }
    
    // Con el this.renderList se construye la lista de libros.
    render() {
        return(
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}


// Container es un componente de react que tiene conexion directa con el estado manejado por redux.

/* En nuestra aplicacion los componentes BookList y BookDetail sin que les importa cuando el estado del libro cambia, por eso
van a ser CONTAINERS mientras que el componente del APP no le interesa los cambios en el estado, porque solo quiere que se carguen
los componentes, por lo que será un componente normal*/

/* En el caso de que el componente BookList tuviera un componente hijo, este no tiene que estar conectado con redux, simplemente
el componente padre */



// Creamos una función la cual va a tener un argumento que va a ser el State. El proposito es tomar el estado como argumento
// El estado contendrá el array de libros así como cual es el libro activo.
// De manera que, todo lo que se devuelto se mostrará como Props dentro de BookList
// IMP. Cuando el estado cambie, automaticamente se produce el render y cambia el BookList
function mapStateToProps(state){
    return{
        // Lo que devuelva state.books va a ser lo que en BookList sea this.props
        books: state.books
    };
}

// Connect permite coger el componente y transformarlo en un container 
export default connect(mapStateToProps)(BookList)



