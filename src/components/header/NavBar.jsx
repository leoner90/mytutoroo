import './header.scss';

import { faBars , faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Logo from './Logo.jsx'
import React, { useEffect } from "react";
import { Link } from "react-scroll";

function NavBar() {
    const [navbarStatus, setNavbarStatus] = useState('');

    function linkGenerator( id , name){
        return (   
            <Link to={id} spy={true} hashSpy={true} smooth={true} offset={-80} duration={500}  onClick={() => { showMobileNavBar();}}  > 
                <FontAwesomeIcon className='caretForMobileMenu'  icon={faCaretRight} />
                {name}
            </Link>
        )
    }

    function showMobileNavBar() {
        if (window.innerWidth < 768) {
            if (navbarStatus !== 'flex') {
                setNavbarStatus('flex')
                document.body.style.overflow = 'hidden';
            } else {
                setNavbarStatus('')
                document.body.style.overflow = 'visible';
            }
        }
    }
    useEffect(()=>{
        const el = document.querySelector(".NavBarWrapper");
        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("not-pinned", e.intersectionRatio < 1),
            { rootMargin: '0px',  threshold: [1] }
          );
          observer.observe(el);
});
    return (        
        <div  className='NavBarWrapper'>
            
            <div className='MenuShowHideBtn'>
                <Logo /> 
                <FontAwesomeIcon  onClick={() => showMobileNavBar()}  icon={faBars} />   
            </div>
            <div className='NavBar' style={{ display: navbarStatus }}>
                <div className='MenuShowHideBtn' >
                    <Logo />
                    <FontAwesomeIcon  onClick={() => showMobileNavBar()}  icon={faBars} />
                </div>
                
                <div className='DesktopLogo'><Logo /></div>
                
                
                <div className='navBarLinksWrapper'>
                    {linkGenerator( 'home' , 'HOME' )}
                    {linkGenerator( 'solarWorks' , 'ABOUT' )}
                    {linkGenerator( 'electroWorks' , 'PRICES' )} 
                    {linkGenerator( 'portfolio' , 'TESTAMONIALS' )} 
                    {linkGenerator( 'contacts' , 'CONTACTS' )}                     
                </div>
            </div>
        </div>
    )
}

export default NavBar;