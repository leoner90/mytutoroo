
function Romb(props) {
  let styleeee = {
    flex: '1',
    clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
    minHeight: '100%',
    marginBottom: '20px',
    background: 'rgb(255,109,28)',
    height: '100px',
    background: 'linear-gradient(134.7deg, #FFF500 20.01%, rgba(255, 255, 255, 0) 90.26%), #FF6D1C',
    //box-shadow: 0px 4px 9px 8px rgb(0 0 0 / 25%);
    Zindex: '99',
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'center'
  }
    return (
      <div style={{flex : '0 0 24%',display: 'flex',marginRight: '1%'}}>
        <div className="romb" style={styleeee}>
            asd
        </div>
        <div style={{flex: '2', display: 'flex', flexDirection: 'column'}}>
          <div style={{flex: '1',justifyContent: 'center',display: 'flex', alignItems: 'center'}}>
            {props.header}
          </div>
          <div style={{flex: '1', borderTop: '1px solid red'}}>
            {props.body}
          </div>
        </div>
      </div>
    )
  }
  export default Romb