import './scss/header.scss'
function Header() {
    return (
      <div id='homePage'  className="header"  style={{backgroundImage: 'url("./img/headerBg.png")'}} >
       <h1 className='header-main-slogan' style={{margin: 0}}>Maths & Science Tuition</h1>
       <h3 className='header-slogan'> <span className='header-slogan-delivering'>Delivering</span> exceptional tutoring...  </h3>
      </div>
    )
  }
  export default Header