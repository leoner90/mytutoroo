import './css/solarPowerSection.scss'
import WorksWeDo from '../components/worksWeDo/WorksWeDo.jsx'
function SolarSection() {
    return (
        <div id="solarWorks"  className=' solarWorksSectionWrapper'>
            <div className='solarPowerWorks'>
            <h4 className='SolarPowerWorksHeader'>SAULES  PANEĻU UZSTĀDĪŠANA</h4>
                <div className='worksWeDoContainer'>
                    <WorksWeDo header= {"Invertora  Iestatīšana"}  imgName={"invertors.png"}/>
                    <WorksWeDo header= {"Projektu pārbaudi"}  imgName={"plan.png"}/>
                    <WorksWeDo header= {"Elektroinstalācijas mērijumus"}  imgName={"measurements.png"}/>
                    <WorksWeDo header= {"Veicam Montāžu"}  imgName={"workProcess.png"}/>
                    <WorksWeDo header= {"Sertificets  speciālists"}  imgName={"certificate.png"}/>
                </div>
              
            </div>
            <div className='solarPowerWorksImg' style={{backgroundImage: 'url("./img/solarPower.jpeg"'}}></div>
        </div>
    )
}

export default SolarSection;