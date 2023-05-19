import './worksWeDo.scss'
function WorksWeDo(props) {
    return (
        <div className='worksWeDoWrapper'>
            <div className='worksWeDoLogoWrapper'>
                <img src={"./WorksWeDo/" + props.imgName} className='worksWeDoWrapperLogo' alt="works we do" />
            </div>
            <h4 className='worksWeDoHeader'>{props.header}</h4>
        </div>
    )
}

export default WorksWeDo;