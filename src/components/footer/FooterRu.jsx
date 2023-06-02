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
      <Link to={id} smooth={true} offset={-150} duration={500} >
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
    threshold: 0.2,
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
        <Logo />
       </div>

        <div className='ContactsWrapper'> 
          {ContactSlot(faPhone ,"Номер телефона: ",'+371 2914 5975')}
          {ContactSlot(faEnvelope ,"Э-почта: ",'msgrupa.riga@gmail.com')}
          {ContactSlot(faMapLocationDot ,'Юридический Адрес: ' , 'Festivāla iela 1, Rīga, LV-1057')}
          <div className='openTime'>
          <div className='footerContactSlotImg'>
            <FontAwesomeIcon className='contactsFontAwesome' icon={faClock} />
          </div>
          <div className='footerContactSlotText'>
            <h4 className='footerContactSlotHeader'>  Время работы: </h4>
              <p>Понедельник - Пятница: с 8:00 до 19:00 <br />
                  Суббота - Выходной.<br />
                  Воскресенье - Выходной.
            </p>
            </div>
          </div>
        </div>  


      </div>


      {/* MENU */}
      <div className='footerNavBar'>
        <h4 className='footerNavBarHeader'> CITAS LAPAS:</h4>
        <div className='center'>
          {linkGenerator( 'home' , 'О НАС' )}
          {linkGenerator( 'solarWorks' , ' СОЛНЕЧНЫЕ ПАНЕЛИ' )}
          {linkGenerator( 'electroWorks' , 'ЭЛЕКТРОМОНТАЖ' )} 
          {linkGenerator( 'clientProgress' , 'РЕЗУЛЬТАТЫ' )} 
          {linkGenerator( 'portfolio' , 'НАШИ РАБОТЫ' )}
          {linkGenerator( 'contacts' , 'КОНТАКТЫ' )}     
        </div>
      </div>
     
      <div className="footerImage" style={{backgroundImage: `url("img/footeSteticImgMain.png")`}}>
        <h4 className='FooterSlogan'>ЗЕЛЕНАЯ ЭНЕРГЕТИКА</h4>
         {/* WINDMILL */}
         <Windmill size={110}  fromLeft={'3%'}/>
         <Windmill size={75}  fromLeft={'39%'} extraClassName="windmillSpeed2"/>
         <Windmill size={50}  fromLeft={'65%'} extraClassName="windmillSpeed3"/>

      </div> 

      



    </div>
  )
}

export default Footer;