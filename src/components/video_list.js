import React from 'react';
import VideoListItem from './video_list_item';

// Se crea un componente funcional ya que no va a tener estado ni ninguna funcionalidad
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} />
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