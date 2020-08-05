import React, { Component } from 'react';
import { Nav, Navbar, Form, NavDropdown, Button, FormControl } from 'react-bootstrap'

import logo from './logo.png'
import discordicon from './imgs/Discord-Logo-Black.svg'
import navercafe from './imgs/navercafe.jpg'
import azalea from './imgs/Azalea.jpg'
import rtbot from './imgs/rtbot.jpg'

import config from './config.json'

export default class Navibar extends Component {
  render() {
    return (
      <Navbar bg="white" expand="sm" fixed="top" className="shadow rounded" classname="nav-item">
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: 40, marginRight: 10 }} />
          InfiniteTeam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <NavDropdown title="디스코드 봇" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <img src={azalea} style={{ width: 27, marginRight: 10 }} />
                Azalea
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <img src={rtbot} style={{ width: 22, marginRight: 12, marginLeft: 2 }} />
                알티봇
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
              <NavDropdown.Item as="a" href={config.discord_invite} target='_blank'>
                <img src={discordicon} style={{ width: 27, marginRight: 10 }} />
                디스코드 서포트 서버
              </NavDropdown.Item>
              <NavDropdown.Item as="a" href={config.navercafe} target="_blank">
                <img src={navercafe} style={{ width: 22, marginRight: 12, marginLeft: 2 }} />
                네이버 카페
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}