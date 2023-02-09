import Nav from 'react-bootstrap/Nav';

function MainNavBar() {
  return (
    <>

    <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='./RegisterForm'>Registro</Nav.Link>
        </Nav.Item>
    </Nav>
    </>
);
}

export default MainNavBar;





