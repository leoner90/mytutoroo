import './css/electricalWorks.scss'
import WorksWeDo from '../components/worksWeDo/WorksWeDo.jsx'
function ElectroSection() {
    return (
        <div id="electroWorks" className='electritionWorksWrapper'>  
        <div  className='electritionWorksImg' style={{backgroundImage: 'url("./img/electroPower.jpg"'}}></div>
        <div className='electricPowerWorks'>
            <h4 className='electricPowerWorksHeader'> ELEKTROMONTĀŽAS DARBI</h4>
            <div className='worksWeDoContainer'>
                    <WorksWeDo header= {"Energobūvniecība"}  imgName={"energyConstruction.png"}/>
                    <WorksWeDo header= {"Projektēšana"}  imgName={"designing.png"}/>
                    <WorksWeDo header= {"Elektroinstalācija"}  imgName={"ElectricalInstallation.png"}/>
                    <WorksWeDo header= {"Zibensaizsardzība"}  imgName={"LightningProtection.png"}/>
                    <WorksWeDo header= {"Elektromērījumi"}  imgName={"ElectricalMeasurements.png"}/>
                </div>
        </div>
    </div>
    )
}

export default ElectroSection;