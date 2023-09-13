import React, { useEffect } from 'react';
import myPhoto  from '../images/smeck.png'
import { useNavigate } from 'react-router';
import ScrollReveal from 'scrollreveal';

const Branner = () => {
    const navigate = useNavigate()

    //naviguer  vers les projets
    const handleNavigate =()=> {
        navigate('/projets')
    }

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

    //animations bottom
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
        <div className='branner'>
            <div className='container-banner'>
             {/*container image de banner*/}
             <div className='cont-img top-animate'>
             <img className='img ' src={myPhoto} alt='' />
           </div>


            {/* les messages d'acceuil*/}
            <div className='present-message'>
            <h1>Hello!!</h1>
             <p >Je suis Salif Moctar Konaté  <strong className='surname'> " Smeck~Dev "</strong></p>
             <p >Développeur d'application </p>
             <span >web et mobile</span>
              <button className='btn bottom-animate' onClick={handleNavigate}>Parcourir mes realisations</button>
            </div>
            
           
            </div>
        </div>
    );
}

export default Branner;
