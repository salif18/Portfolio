import React from 'react';
import {useNavigate} from 'react-router'

const CardVideo = ({item}) => {
    const navigate = useNavigate()
    
    return (
        <div className='cardvideo' key={item.id} onClick={()=>navigate(`/projets/${item.id}`)}>
            <video controls  autoPlay >
            <source type='video/mp4' src={item.video} />
            </video>
            <h1>{item.titre}</h1>
        </div>
    );
}

export default CardVideo;
