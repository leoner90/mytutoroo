import './worksWeDo.scss'
import { faPlugCircleBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function WorksWeDo(props) {
    return (
        <div className='worksWeDoWrapper'>
            <div className='worksWeDoLogoWrapper'>
                <FontAwesomeIcon className="itemInfoFontAwesome" icon={faPlugCircleBolt} />
            </div>
            <div className='servicesContent'>
                <h4 className='worksWeDoHeader'>{props.header}</h4>
                <h4 className='worksWeDoFooter'>{props.body}</h4>
            </div>
            
        </div>
    )
}

export default WorksWeDo;