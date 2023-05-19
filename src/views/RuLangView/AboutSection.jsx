import '../css/aboutSection.scss'
import { NavLink } from 'react-router-dom'
function AboutSection() {
    return (
      <div id="home">
        <div className='coloredSetion' style={{backgroundImage: 'url("./img/project1.jpeg"'}}>
            <div className='HomeFirstSectionWrapper'>
                <div className='HomeAboutText'>
                    SIA MsGrupa <br />
                    Saules Panelu Uzstadina un elektromontazu darbi <br />
                    Tirgu kops 2017 gada <br />
                    <NavLink
                    to={`${process.env.PUBLIC_URL}/contacts`} > 
                        <button className='contactsBtn'>ПРИВЕЕЕТ</button>
                    </NavLink>
                </div>
                
            </div>
        </div>
      </div>
    )
}

export default AboutSection;