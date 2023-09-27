
import './Gallery.scss';
import { faPlugCircleBolt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePageProjects (props) {
 

    return (
        <div className='homePageProjectWrapper'  >
          
               
                <h4 className='itemInfoHeader'>
                    <FontAwesomeIcon className="itemInfoFontAwesome" icon={faPlugCircleBolt} />
                    PARENTS
                </h4>
                <p className='itemInfoBody'>{props.bodyText}</p>
                <p><img className='stars-raiting' src="./img/stars-raiting.png" alt="stars" /></p>
           
 
        </div>
    )
}

export default HomePageProjects;