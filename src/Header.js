// // import React from 'react';
// // import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';  // Bootstrap components
// // import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
// // import './Header.css';  // Custom CSS for the Header

// // function Header() {
// //   return (
// //     <Navbar expand="lg" className="navbar-custom">
// //       <Container>
// //         <Navbar.Brand href="#home" className="brand-name">Siddharth </Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="me-auto">
// //             <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
// //             <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
// //             <Nav.Link href="/sellers" className="nav-link">Sellers</Nav.Link>
// //             <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown">
// //               <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
// //               <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
// //               <NavDropdown.Divider />
// //               <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
// //             </NavDropdown>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }

// // export default Header;

// import React, { useEffect } from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css';

// function Header() {
//   useEffect(() => {
//     const handleRedirect = (event) => {
//       // Check if the clicked link is not "Sellers"
//       if (!event.target.href || !event.target.href.includes('/sellers')) {
//         window.location.href = 'http://localhost:3000/';
//       }
//     };

//     // Add event listener to capture clicks on the Navbar links
//     document.querySelector('.navbar-custom').addEventListener('click', handleRedirect);

//     // Clean up the event listener
//     return () => {
//       document.querySelector('.navbar-custom').removeEventListener('click', handleRedirect);
//     };
//   }, []);

//   return (
//     <Navbar expand="lg" className="navbar-custom">
//       <Container>
//         <Navbar.Brand href="#home" className="brand-name">Siddharth</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
//             <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
//             <Nav.Link href="/sellers" className="nav-link">Sellers</Nav.Link>
            // <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown">
            //   <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
            //   <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
            //   <NavDropdown.Divider />
            //   <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
            // </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Header.css';

// function Header() {
//   return (
//     <Navbar expand="lg" className="navbar-custom" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="brand-name">Siddharth Singh</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
//             <Nav.Link as={Link} to="/sellers" className="nav-link">Sellers</Nav.Link>
//             {/* <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link> */}
//             <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';  // Import NavDropdown
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-name">Siddharth Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/sellers" className="nav-link">Sellers</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/">About</NavDropdown.Item>
              <NavDropdown.Item href="/">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
