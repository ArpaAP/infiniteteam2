import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import logo from '../imgs/logo.png';
import discordicon from '../imgs/Discord-Logo-Black.svg';
import navercafe from '../imgs/navercafe.jpg';
import azalea from '../imgs/Azalea.jpg';
import rtbot from '../imgs/rtbot.jpg';

import config from '../config.json';

export default class Navibar extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: 65.94 }}>
          <Navbar bg="white" expand="sm" fixed="top" className="nav-item shadow rounded no-drag">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="" style={{ width: 40, marginRight: 10 }} />
          InfiniteTeam
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">홈</Nav.Link>
                <NavDropdown title="디스코드 봇" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <img src={azalea} alt="" style={{ width: 27, marginRight: 10 }} />
                Azalea
              </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <img src={rtbot} alt="" style={{ width: 22, marginRight: 12, marginLeft: 2 }} />
                알티봇
              </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
                  <NavDropdown.Item as="a" href={config.discord_invite} target='_blank'>
                    <img src={discordicon} alt="" style={{ width: 27, marginRight: 10 }} />
                디스코드 서포트 서버
              </NavDropdown.Item>
                  <NavDropdown.Item as="a" href={config.navercafe} target="_blank">
                    <img src={navercafe} alt="" style={{ width: 22, marginRight: 12, marginLeft: 2 }} />
                네이버 카페
              </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}