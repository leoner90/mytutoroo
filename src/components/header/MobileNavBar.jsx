import { Link } from "react-scroll";
import HeaderContacts from './HeaderContacts.jsx'
import './scss/header.scss'
import { useState } from "react";
 
//Link Generator
function linkGenerator( id , name){
  return (
      <Link to={id} spy={true} hashSpy={true} smooth={true} offset={-100} duration={500}>   
          <span className="linkText"> {name}</span>   
      </Link>
  )
}
//Main
function NavBar(props) {
  const [srollHider, setSrollHider] = useState('show');
  const [srollShow, setSrollShow] = useState('hide');
  const [test, setTest] = useState(120);
  window.onscroll = function() {hideShowContactsOnScroll()};
  function hideShowContactsOnScroll (){  
    if(document.documentElement.scrollTop > test) {
      setSrollHider('hide')
      setSrollShow('show')
      setTest(0)
    } else {
      setSrollHider('show')
      setSrollShow('hide')
      setTest(120)
    }
  }

  let navBarToggle = 'navBar displayNone';
  if(!props.show){
    navBarToggle = 'navBar';
  }
  return (
    <div  className={navBarToggle} style={{padding: '0 15%' , display: 'flex', position: 'sticky', top: 0, zIndex: '999' , background: 'linear-gradient(0deg, #c9d7d0 0%, #fff 100%)'}}>
        <div className="logoWrapper" >
          <a href="#homePage"   onClick = {() =>  {window.scrollTo(0 ,0)}}>
              <img className={`${srollShow}  smallLogo`} src="./img/smallLogo.png" alt="" />
              <img className={`${srollHider}  logo`} src="./img/logo.png" alt=""  />
          </a>
        </div>
        <div style={{flex: '11', display: 'flex', flexDirection: 'column'}}>
          <HeaderContacts srollHider = {srollHider}  />
          <nav className="navigation">
            {linkGenerator( 'homePage' , 'HOME' )}
            {linkGenerator(  'about' , 'ABOUT' )}
            {linkGenerator( 'prices' , 'PRICES' )}
            {linkGenerator( 'testimonials' , 'TESTIMONIALS' )}
            {linkGenerator( 'contacts' , 'CONTACTS' )}
          </nav>
        </div>
    </div>
  )
}

export default NavBar