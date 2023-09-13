import React, { useEffect } from 'react';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
  //animation
  useEffect(()=>{
      ScrollReveal().reveal('.annimate-left',{
        duration: 1000,
      origin: 'rigth',
      distance: '20px',
      delay: 0,
      easing:'ease-in-out',
      reset: true
      })
      ScrollReveal().reveal()
      return () => {
        ScrollReveal().destroy()
      }
  },[])

    return (
        <footer className='footer'>
          <div className='container-footer'>
            <div className='contacts'>
            
            <div className='left'>
              <p className=' annimate-left'><DesktopMacIcon className='icon'/> Smeck dev</p>
              <p className=' annimate-left'><AlternateEmailIcon className='icon'/> Email: <span>salifmoctarkonate@gmail.com</span> </p>
              <p className=' annimate-left'><GitHubIcon className='icon'/> Github <span>Salif18</span></p>
            </div>

            <div className='rigth'>
              <p className=' annimate-left'><FacebookIcon className='icon'/> Facebook</p>
              <p className=' annimate-left'><InstagramIcon className='icon'/> Instagram</p>
              </div>
            </div>

            <div className='partenaire'>
              <p>&copy; 2022-2023</p>
            </div>
          </div>
            
        </footer>
    );
}

export default Footer;
