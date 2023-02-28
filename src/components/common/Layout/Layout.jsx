import FooterComponent from "../Footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";

const Layout = ({children}) => {
    return (   <>
        <NavbarComponent/>
          {children}
        <FooterComponent/>
        </> );
}
 
export default Layout;