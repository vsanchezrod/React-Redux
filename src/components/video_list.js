import React from 'react';
import VideoListItem from './video_list_item';

// Se crea un componente funcional ya que no va a tener estado ni ninguna funcionalidad
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            // El etag es como un identificador ÚNICO de cada video de youtube. De manera que cuando queramos actualizar un video, podamos hacerlo usando su id
            // Y no teniendo que descartar toda la lista de videos y teniendola que crear de nuevo, lo cual sería bastante más lento.
            <VideoListItem 
                // Ahora pros tiene otra propiedad onVideoSelect
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        );
    });
   
    
    return(
        //Se va a mostrar una lista con los videos
        //El nombre de clase es del bootstrap que se está usando en el index.html que le va a dar un estilo especial a las listas
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
