import "./Header.css";
import logo from "../../ASSETS/IMAGES/logo.png"

function Header(): JSX.Element {
    return (
        <div className="Header">
         <img className="img1" src={logo} alt="clalit"/> 

       
       <h2> D-App: the only App calculating your distribution route for you</h2>
       
      
   </div>
    );
}

export default Header;
