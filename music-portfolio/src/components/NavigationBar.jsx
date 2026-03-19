// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg";

// export default function NavigationBar() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src={logo}
//             alt="Logo"
//             width="60"
//             height="60"
//             className="d-inline-block align-top me-2"
//           />
//           Crown Piano Studio
//         </Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse>
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/about">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/services">
//               Services
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact">
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      expanded={expanded} // control collapse state
      className="mb-4"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyWebsite
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
