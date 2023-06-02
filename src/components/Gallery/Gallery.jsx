
import './Gallery.scss';
import { faPlugCircleBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePageProjects (props) {
 

    return (
        <div className='homePageProjectWrapper'  style={{backgroundImage: 'url("./workImg/'+ props.imgName + '"'}} >
            
            <div className='itemInfo '>
                <FontAwesomeIcon className="itemInfoFontAwesome" icon={faPlugCircleBolt} />
                <h4 className='itemInfoHeader'>{props.header}</h4>
                <h4 className='itemInfoBody'>{props.bodyText}</h4>
            </div>
 
        </div>
    )
}

export default HomePageProjects;