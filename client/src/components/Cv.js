import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import cv from '../assets/documents/Rachid attestation.pdf'
import ScrollReveal from 'scrollreveal';

const Cv = () => {

  //effect pour bottom
  useEffect(()=>{
    ScrollReveal().reveal('.element',{
      duration: 1000,
      origin: 'bottom',
      distance: '20px',
      delay: 0,
      easing:'ease-in-out',
      reset: true
    });
    ScrollReveal().reveal('.element');
    return () => {
      ScrollReveal().destroy();
    };

  },[]);

  //effet pou rigth
  useEffect(()=>{    
    ScrollReveal().reveal('.up-left',{
      duration: 1000,
      origin: 'rigth',
      distance: '40px',
      delay: 0,
      easing:'ease-in-out',
      reset: true   
    });
    ScrollReveal().reveal('.up-left');
    return () => {
      ScrollReveal().destroy();
    };
  },[]);

  //effet left
  //effet pou rigth
  useEffect(()=>{
    ScrollReveal().reveal('.up-rigth',{
      duration: 1000,
      origin: 'left',
      distance: '40px',
      delay: 0,
      easing:'ease-in-out',
      reset: true
    });
    ScrollReveal().reveal('.up-rigth');
    return () => {
      ScrollReveal().destroy();
    };
  },[]);



  return (
    <div className="cv-container">
    {/*container de droit*/}
    <div className="cv-left ">
     <p className="up-left" >
      <strong>Salut!</strong> Je m'appelle <strong>Salif Moctar Konate</strong> . Je suis développeur fullstack d'application web et mobile.
      Je suis tres passionne pour ce travail.<hr/>Avec 5 ans d'experience dans cette activite.<br/>J'ai acquis les compétences et les connaissances nécessaires pour faire de votre projet une réussite
    </p>
    <div className="cv-left-sous ">
    <p className="element">Née le, <span>12/11/1998 </span></p>
       <p className="element">Address <span>Bamako, Mali </span></p>
       <p className="element">Université <span>FSEG de Bamako</span></p>
       <p className="element">Diplome: <span>Licence</span></p>
       <p className="element">Email: <span>salifmoctarkonate@gmail.com</span></p>
       <p className="element">Numero: <span>+223 78303208</span></p>
       <p className="element">Hobie: <span>Football , musique, playstation</span></p> 
    </div>
    </div>

      {/*container de gauche*/}
      <div className="cv-right">
        <h2 className="up-rigth">Competences</h2>
        <ul className="competence element up-rigth">
        <h2>Frontend</h2>
            <li>React js</li>
            <li>React native</li>
        </ul>
        <ul className="competence up-rigth">
        <h2>Backend</h2>
        <li>Node js</li>
        <li>Express js</li>
        </ul>
       <h2 className="up-rigth">Base de donnees</h2>
       <ul className="competence up-rigth">
       <li>MongoDB</li>
       <li>Mysql</li>
       </ul>
        <hr/>
        <h2 className="up-rigth">Expérience professionnelle</h2>
        <ul>
          <li className="up-rigth">
            <strong>Independant</strong> - Développeur Web (2022 - Présent)
  
          </li>
          <li className="up-rigth">
            <strong>Entreprise XYZ</strong> - Stagiaire en développement web
            (2021)
            <p>
              Projets réalisés...<NavLink to="/projets" style={{color:'red', fontWeight:'bold'}}>ici</NavLink>
            </p>
          </li>
        </ul>
        <h2 className="up-rigth">Auto Formation</h2>
        <hr/>
        <ul>
          <li className="up-rigth">
            <strong>OpenClasseroom</strong>
          </li>
          <li className="up-rigth">
            <strong>W3school</strong>
          </li>
          <li className="up-rigth">
            <strong>Chaines Youtube</strong>
          </li>
        </ul> <div className="download">
        <a href={cv} download>
          <button className="element">Télécharger mon cv</button>
        </a>
      </div>
      </div>
     
    </div>
  );
};

export default Cv;
