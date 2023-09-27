import './headerInfoBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faPhone , faLocationDot } from '@fortawesome/free-solid-svg-icons'
function headerInfoBar() {

    function fontAwesome(value, className) {
        return <FontAwesomeIcon className={className} icon={value} />
    }

    return (
        <div  className='contactInfo'>
            <div>  {fontAwesome(faPhone,'fontAwesomeInfoBar')} 071818181546</div>
            <div>  {fontAwesome(faEnvelope,'fontAwesomeInfoBar')} mytutoroo@yahoo.co.uk</div>
            <div>  {fontAwesome(faLocationDot,'fontAwesomeInfoBar')} SALFORD</div>
        </div>
    )
}

export default headerInfoBar;