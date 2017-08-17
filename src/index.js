// Instalamos una nueva dependencia (librería) LODASH y la importamos
import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Creamos una constante, que va a ser la KEY DEL API de Youtube. No va a cambiar
const API_KEY = 'AIzaSyABvZR95mHIj30vRfV0OzKhVJPSg03oYUo';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos:[],
      selectedVideo: null
    };

    // Búsqueda de inicio
    this.videoSearch('surfboards');


  }

  // Se define otro método para la búsqueda de videos en el que se mete dentro YTSearch con el término de búsqueda cambiado

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }



  render() {

    // Debounce hacer que esa función solo pueda ser llamada cada 300 milisegundos
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


    return (
      /* Añadimos el componente VideoList y tenemos que pasarle la informacion desde el componente padre APP al componente hijo VIDEOLIST
      Para que salga el listado de los videos buscados. Esto se conoce como PASSING PROPS*/
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video= {this.state.selectedVideo}/>
        <VideoList 
          //Vamos a añadir un callback para poder seleccionar los videos de la lista
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos= {this.state.videos}/>
      </div>
    );
  }
}

// Tenemos que hacer que meta ese componente nuevo creado en la página (en el DOM)
// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
