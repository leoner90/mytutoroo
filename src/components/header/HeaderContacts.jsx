import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './scss/header.scss'

function fontAwesome(valuee,styles) {
  return <FontAwesomeIcon icon={valuee} style={styles}/>
}

function LeftSideBar(props) {
  let stylesss = {
    transform: 'rotate(-30deg)',
    paddingRight: '5px'
  }
 
  return (
    <div  className={`${props.srollHider}  headerContacts`} >
      <div className="text-right header-contacts" style={{padding: '10px 5px 0 5px'}}>
        <span className='headerContacts'> {fontAwesome(faPhoneVolume,stylesss)} 07783008078 </span>
        <span className='headerContacts'> {fontAwesome(faMapMarkerAlt)} SALFORD </span>
        <span className='headerContacts'> {fontAwesome(faEnvelope)} mytutoroo@yahoo.co.uk </span>
      </div>
        
    </div>
  )
  }
  export default LeftSideBar