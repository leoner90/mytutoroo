
import './Gallery.scss';

function HomePageProjects (props) {
 

    return (
        <div className='homePageProjectWrapper'  style={{backgroundImage: 'url("./workImg/'+ props.imgName + '"'}} >
            
            <div className='itemInfo '>
                <h4>{props.header}</h4>
                <h4>{props.bodyText}</h4>
            </div>
 
        </div>
    )
}

export default HomePageProjects;