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
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      /* Añadimos el componente VideoList y tenemos que pasarle la informacion desde el componente padre APP al componente hijo VIDEOLIST
      Para que salga el listado de los videos buscados. Esto se conoce como PASSING PROPS*/
      <div>
        <SearchBar />
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
