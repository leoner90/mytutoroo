import './footer.scss'
import { Link } from "react-scroll";
import Logo from '../header/Logo.jsx'
import React, { useEffect } from "react";
import Windmill from '../windMill/windMill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCaretRight, faPhone, faEnvelope,faMapLocationDot , faClock } from '@fortawesome/free-solid-svg-icons'
function fontAwesome(value, className) {
  return <FontAwesomeIcon className={className} icon={value} />
}

function linkGenerator( id , name){
  return (
      <Link to={id}  spy={true} hashSpy={true} smooth={true} offset={-150} duration={500} >
         {fontAwesome(faCaretRight, 'footeMenuFontAwesome')}
          {name}
      </Link>
  )
}


function Footer() {

  let callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        document.getElementById('footerContacts').classList.add('animation');
      } 
    });
  };
     
  let options = {
    root: document.querySelector("#Footer"),
    rootMargin: "0px",
    threshold: 1.0,
  };
    
  let observer = new IntersectionObserver(callback, options);

  useEffect(()=>{
    let target = document.querySelector("#Footer");
    observer.observe(target);
  });


  function ContactSlot (icon, headerText , body) {
    return (
        <div>
            <div className='footerContactSlotImg'><FontAwesomeIcon className='contactsFontAwesome' icon={icon} /></div>
            <div className='footerContactSlotText'>
                <h4 className='footerContactSlotHeader'> {headerText} </h4>
                <p> {body} </p>
            </div>
        </div>
    )
}
  return (
    <div id="Footer" className="Footer" >
      <div id="footerContacts" className='footerContacts'>
       <div className='footerLogo'> 
        <Logo /> MsGrupa
       </div>

        <div className='ContactsWrapper'> 
          {ContactSlot(faPhone ,"Telefona numurs: ",'+371 2672 2829')}
          {ContactSlot(faEnvelope ,"E-pasts: ",'msgrupa@info.lv')}
          {ContactSlot(faMapLocationDot ,'Juridiska Adrese: ' , 'Festivāla iela 1 - 38, Rīga, LV-1057')}
          <div className='openTime'>
          <div className='footerContactSlotImg'>
            <FontAwesomeIcon className='contactsFontAwesome' icon={faClock} />
          </div>
          <div className='footerContactSlotText'>
            <h4 className='footerContactSlotHeader'>  Darba Laiks: </h4>
            <p>  Pirmdiena - Piektdiena: no 8:00 līdz 17:00 <br />
            Sestdiena - : no 10:00 līdz 14:00 <br />
            Svētdiena - Brīvdiena.
            </p>
            </div>
          </div>
        </div>  


      </div>


      {/* MENU */}
      <div className='footerNavBar'>
        <h4 className='footerNavBarHeader'> CITAS LAPAS:</h4>
        <div className='center'>
          
           
          {linkGenerator( 'home' , 'PAR MUMS' )}
          {linkGenerator( 'solarWorks' , ' SAULES PANEĻI' )}
          {linkGenerator( 'electroWorks' , 'ELEKTROMONTĀŽA' )} 
          {linkGenerator( 'clientProgress' , 'REZULTĀTI' )} 
          {linkGenerator( 'portfolio' , 'MUSI DARBI' )}
          {linkGenerator( 'contacts' , 'KONTAKTI' )} 
                 
        </div>
      </div>
     
      <div className="footerImage" style={{backgroundImage: `url("footeSteticImgMain.png")`}}>
        <h4 className='FooterSlogan'>ZAĻĀ ENERĢIJA</h4>
         {/* WINDMILL */}
         <Windmill size={140}  fromLeft={'0'}/>
         <Windmill size={75}  fromLeft={'35%'} extraClassName="windmillSpeed2"/>
         <Windmill size={40}  fromLeft={'68%'} extraClassName="windmillSpeed3"/>

      </div> 

      



    </div>
  )
}

export default Footer;