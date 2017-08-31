// Vamos a crear un nuevo componente con react para renderizar la lista de libros
import React, {Component} from 'react';
// Importamos librería de react-redux para poder pasar de componente a container
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
// Esto sirve para que la accion de nuestra funcion se conecta con todos los reducers
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}>
                </li>
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
//Anthing returned from this function will end up as props on the BookListe container
function mapsDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Connect permite coger el componente y transformarlo en un container 
// Promote BookList from a component to a container - It needs to know about this new dispatch method, selectBook and
// make ir avaible as a prop.
export default connect(mapStateToProps, mapsDispatchToProps)(BookList) 



