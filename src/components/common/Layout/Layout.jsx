import FooterComponent from "../Footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import "../../Styles/homePage.css";

const Layout = ({children}) => {
    return (   <>
        <NavbarComponent/>
          {children}
        <FooterComponent/>
        </> );
}
 
export default Layout;