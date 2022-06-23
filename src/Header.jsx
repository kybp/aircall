import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Logo from './Logo.jsx';

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
