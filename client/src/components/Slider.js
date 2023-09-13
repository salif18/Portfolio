import React, { useEffect } from 'react';
import { Swiper , SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'
import img1 from '../images/187745698_3081308962143086_297203494826971554_n.jpg'
import img2 from '../images/sabine.webp'
import img3 from '../images/images (5).jpeg'
import CardSlide from '../constants/CardSlide';
import ScrollReveal from 'scrollreveal';


const Slider = () => {

    const clients = [
        {
            img:img1,
            propos:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat"'
        },
        {
            img:img2,
            propos:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat."'
        },
        {
            img:img3,
            propos:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex ea commodo consequat."'
        }
    ]

    
    //animations
    useEffect(()=>{
        ScrollReveal().reveal('.top-animate',{
            duration: 1000,
            origin: 'top',
            distance: '50px',
            delay: 0,
            easing:'ease-in-out',
            reset: true
        });
        ScrollReveal().reveal('.top-animate');
        return ()=>{
            ScrollReveal().destroy()
        }
    },[])

    //animations
    useEffect(()=>{
        ScrollReveal().reveal('.bottom-animate',{
            duration: 1000,
            origin: 'top',
            distance: '50px',
            delay: 0,
            easing:'ease-in-out',
            reset: true
        });
        ScrollReveal().reveal('.bottom-animate');
        return ()=>{
            ScrollReveal().destroy()
        }
    },[])
    
    return (
        <div className='slider'>
            
            <div className='container-slider'>
            <h1 className='bottom-animate'>Temoignages de mes clients </h1>
             <Swiper 
              className='swiper'
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{clickable:true}}
              
             >
              {
                clients
                .map((item,index)=>(
                    <SwiperSlide className='swiper-slider ' key={index}>
                      <CardSlide item={item} key={index} />
                    </SwiperSlide>
              ))}
             </Swiper>
            </div>

        </div>
    );
}

export default Slider;
