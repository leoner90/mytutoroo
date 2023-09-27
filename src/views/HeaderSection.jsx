import './css/HeaderSection.scss'

function AboutSection() {
  return (
    <div id="home" className="AboutWrapper" style={{backgroundImage: 'url("./img/headerBg/headerBg.png"'}} >
      <div className="dimmer"></div>
        <div className='HomeFirstSectionWrapper HomeAboutText'>
          <h1 className="mainHeader">
              Maths & Science Tuition  
          </h1>
          <h4 className='mainSubHeader'>Delivering Exceptional Tutoring</h4>
          {/* <div className='PseudoEL'></div> */}
        </div>
    </div>
  )
}

export default AboutSection;