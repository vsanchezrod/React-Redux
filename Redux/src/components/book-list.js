// Vamos a crear un nuevo componente con react para renderizar la lista de libros
import React, {Component} from 'react';

export default class BookList extends Component {
    renderList() {
        return this.props.books.map((books) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}></li>
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

// Por ahora esto no tiene conexión con redux por lo que no es un CONTAINER es un componente
// Container es un componente de react que tiene conexion directa con el estado manejado por redux.