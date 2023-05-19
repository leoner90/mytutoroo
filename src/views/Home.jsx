import './css/home.scss';
import Contacts from './ContactsSection.jsx'
import AboutSection from './AboutSection.jsx'
import ElectroSection from './ElectroSection.jsx'
import SolarSection from './SolarSection.jsx'
import GallerySection from './GallerySection.jsx'
import MapSection from './MapSection.jsx'

//RU IMPORTS
import AboutSectionRu from './RuLangView/AboutSection.jsx'



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
function Home() {
    let language = getCookie("currentLanguage");
    if (language === 'ru') {
        return (
            <div>
                <AboutSectionRu /> 
            </div>
        )
    } else {
        return (
            <div>
                <AboutSection /> 
                <SolarSection />
                <ElectroSection />
                <MapSection />
                <GallerySection />
                <Contacts />
            </div>
        )
    }
   
}

export default Home;