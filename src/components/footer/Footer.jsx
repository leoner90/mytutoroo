import './footer.scss'
import Logo from '../header/Logo.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhone, faEnvelope,faMapLocationDot  } from '@fortawesome/free-solid-svg-icons'




function Footer() {

  function ContactSlot (icon, headerText , body) {
    return (
        <div>
                <FontAwesomeIcon icon={icon} />
                <h4 className='footerContactSlotHeader'> {headerText} </h4>
                <p> {body} </p>
             
        </div>
    )
}
  return (
    <div id="Footer" className="Footer" >
    
       
     

          {ContactSlot(faPhone ,"  ",' +371 2914 5975')}
          {ContactSlot(faEnvelope ," ",' msgrupa.riga@gmail.com')}
          <Logo />
          {ContactSlot(faMapLocationDot ,' ' , ' Festivāla iela 1 , Rīga, LV-1057')}
    </div>
 
  )
}

export default Footer;