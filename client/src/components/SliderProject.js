import React, { useEffect } from 'react';
import { Swiper , SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'
import CardVideo from '../constants/CardVideo.js';
import video1 from '../assets/videos/video1.m4v'
import video2 from '../assets/videos/video2.m4v'
import video3 from '../assets/videos/video3.m4v'
import video4 from "../assets/videos/FormatFactory Enregistrement d'écran20230913_142552.h264.m4v"
import video5 from  "../assets/videos/video5.mp4";
import ScrollReveal from 'scrollreveal';

const SliderProject = () => {
    const projects = [
        {id:1,video:video1,titre:'Portfolio'},
        {id:2,video:video2,titre:'Gestion de boutique'},
        {id:3,video:video3,titre:'Freelance'},
        {id:4,video:video4,titre:'E-commerce'},
        {id:5,video:video5,titre:'ShopApp Mobile'},
       
    ]

    
    //animations
    useEffect(()=>{
        ScrollReveal().reveal('.bottom-animate',{
            duration: 1000,
            origin: 'bottom',
            distance: '100px',
            delay: 0,
            easing:'ease-in-out',
            reset: true
        });
        ScrollReveal().reveal('.bottom-animate');
        return ()=>{
            ScrollReveal().destroy()
        }
    },[])

     //animations
     useEffect(()=>{
        ScrollReveal().reveal('.top-animate',{
            duration: 1000,
            origin: 'top',
            distance: '100px',
            delay: 0,
            easing:'ease-in-out',
            reset: true
        });
        ScrollReveal().reveal('.top-animate');
        return ()=>{
            ScrollReveal().destroy()
        }
    },[])


    return (
        <div className='slider-project'>
        
        
            
            <h1 className='top-animate'>Mes réalisations</h1>
            <div className='container-slide'>
              <Swiper
               className='swiper'
               slidesPerView={3}
               spaceBetween={20}
               //grabCursor={true}
               >
               {
                projects
                .map((item) => (
                <SwiperSlide className='swiper-slide '>
                   <CardVideo item={item} key={item.id}  />
                </SwiperSlide>
               ))}
              </Swiper>
              </div>
           
        </div>
    );
}

export default SliderProject;
