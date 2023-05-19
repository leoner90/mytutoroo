import './header.scss';

import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Logo from './Logo.jsx'
import React, { useEffect } from "react";
import { Link } from "react-scroll";


function fontAwesome(value, className) {
    return <FontAwesomeIcon className={className} icon={value} />
}
 
function NavBar() {
    const [navbarStatus, setNavbarStatus] = useState('');

    function linkGenerator( id , name){
        return (
            <Link
                to={id}
                spy={true} hashSpy={true} smooth={true} offset={-150} duration={500}
                onClick={() => { showMobileNavBar();  }} 
            >
                {name}
            </Link>
        )
    }

    function showMobileNavBar() {
        if (window.innerWidth < 800) {
            if (navbarStatus !== 'flex') {
                setNavbarStatus('flex')
            } else {
                setNavbarStatus('')
            }
        }
    }
    useEffect(()=>{
        const el = document.querySelector(".NavBarWrapper");
        const observer = new IntersectionObserver( 
            ([e]) => e.target.classList.toggle("not-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
          );
          
          observer.observe(el);
});
    return (        
        <div className='NavBarWrapper'>
            
            <div className='MenuShowHideBtn'
                onClick={() => showMobileNavBar()}
            >
                {fontAwesome(faBars)}
            </div>
            <div className='NavBar' style={{ display: navbarStatus }}>
                <Logo />
                <div className='CompanyName'> MSGrupa</div>
                <div className='MenuShowHideBtn' onClick={() => showMobileNavBar()} >
                    {fontAwesome(faBars)}
                </div>
                <div className='navBarLinksWrapper'>
                    {linkGenerator( 'home' , 'PAR MUMS' )}
                    {linkGenerator( 'solarWorks' , ' SAULES PANEĻI' )}
                    {linkGenerator( 'electroWorks' , 'ELEKTROMONTĀŽA' )} 
                    {linkGenerator( 'clientProgress' , 'REZULTĀTI' )} 
                    {linkGenerator( 'portfolio' , 'MUSI DARBI' )}
                    {linkGenerator( 'contacts' , 'KONTAKTI' )} 
                </div>
            </div>
        </div>
    )
}

export default NavBar;