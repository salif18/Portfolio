import React from 'react';


const CardSlide = ({item ,index}) => {


    return (
        <div className='cardslide ' key={index}>
            <img src={item.img} alt='' />
            <div>
              <h2>Temoignages</h2>
              <p>{item.propos}</p>
            </div>
        </div>
    );
}

export default CardSlide;
