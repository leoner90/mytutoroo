import './css/aboutSection.scss'
import { Link } from "react-scroll";
function AboutSection() {
    return (
      <div >
        <div className='coloredSetion' style={{backgroundImage: 'url("./img/project1.jpeg"'}}>
            <div className='HomeFirstSectionWrapper'>
                <div className='HomeAboutText'>
                    SIA MsGrupa <br />
                    Saules Panelu Uzstādīšana un elektromontāžas darbi <br />
                    Tirgū kopš 2017 gada <br />
                    <Link
                        to={`contacts`} 
                        smooth={true}
                    > 
                        <button className='contactsBtn'>KONTAKTI</button>
                    </Link>
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default AboutSection;