import FooterComponent from "../Footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import "../../Styles/homePage.css";

const Layout = ({children}) => {
    return (   <div className="layoutHeight">
        <NavbarComponent/>
          {children}
        <FooterComponent/>
        </div> );
}
 
export default Layout;