import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
// Importamos el componente de la barra de busqueda SearcBar
import SearchBar from './components/search_bar';

// Creamos una constante, que va a ser la KEY DEL API de Youtube. No va a cambiar
const API_KEY = 'AIzaSyABvZR95mHIj30vRfV0OzKhVJPSg03oYUo';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos:[] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Tenemos que hacer que meta ese componente nuevo creado en la página (en el DOM)
// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
