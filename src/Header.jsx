import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import Logo from './Logo.jsx';

const Header = () => {
  const [selected, setSelected] = useState('/activities');

  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto" activeKey="All">
            <LinkContainer to="/activities">
              <Nav.Link>All</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/activities/archived">
              <Nav.Link>Archived</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
