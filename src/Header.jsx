import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import Logo from './Logo.jsx';

const linkTitles = {
  '/activities': 'All',
  '/activities/archived': 'Archived',
};

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
          <NavDropdown title={linkTitles[selected]} onSelect={setSelected}>
            <LinkContainer to="/activities">
              <NavDropdown.Item>{linkTitles['/activities']}</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/activities/archived">
              <NavDropdown.Item>
                {linkTitles['/activities/archived']}
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
