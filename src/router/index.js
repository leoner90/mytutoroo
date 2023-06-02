import React from 'react'
import Contacts from '../views/LvLangView/ContactsSection.jsx'
import AboutSection from '../views/LvLangView/AboutSection.jsx'
import ElectroSection from '../views/LvLangView/ElectroSection.jsx'
import SolarSection from '../views/LvLangView/SolarSection.jsx'
import GallerySection from '../views/LvLangView/GallerySection.jsx'
import MapSection from '../views/LvLangView/MapSection.jsx'
import Footer from '../components/footer/Footer.jsx'


//RU IMPORTS
import AboutSectionRu from '../views/RuLangView/AboutSection.jsx'
import ContactsRu from '../views/RuLangView/ContactsSection.jsx'
import ElectroSectionRu from '../views/RuLangView/ElectroSection.jsx'
import SolarSectionRu from '../views/RuLangView/SolarSection.jsx'
import GallerySectionRu from '../views/RuLangView/GallerySection.jsx'
import MapSectionRu from '../views/RuLangView/MapSection.jsx'
import FooterRu from '../components/footer/FooterRu.jsx'



function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
 

const Router = () => {
    let language = getCookie("currentLanguage");
    if (language === 'ru') {
        return (
            <div>
                <AboutSectionRu /> 
                <SolarSectionRu />
                <ElectroSectionRu />
                <MapSectionRu />
                <GallerySectionRu />
                <ContactsRu />
                <FooterRu />
            </div>
        )
    } else {
        return(
            <div>
                <AboutSection /> 
                <SolarSection />
                <ElectroSection />
                <MapSection />
                <GallerySection />
                <Contacts />
                <Footer />
            </div>
        )
    }


 }
export { Router };