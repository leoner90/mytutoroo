import { Link } from "react-scroll";
function Logo () {
    return (
        <div>
        <Link to={'home'} className="flex items-center"
            smooth={true}
        >
            <div className="MainLogo" style={{backgroundImage: 'url("logo.png")'}}></div>
            
        </Link>
        </div>
    )
}

export default Logo;