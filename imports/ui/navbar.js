import React, {Component} from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
import AccountsWrapper from './accountsWrapper.jsx';
import '../style/App.css';

class Navegacion extends Component {
    render() {
      let isLoggedin = (this.props.user !== null);
        return (
            <div>
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            FootScores
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                          {isLoggedin ?
                            <Nav>
                              <LinkContainer to="/home">
                                <NavItem eventKey={1}>Instrucciones</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/leagues">
                                <NavItem eventKey={2}>Ligas</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/leaderboard">
                                <NavItem eventKey={3}>Leaderboard</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/profile">
                                  <NavItem eventKey={4}>Perfil</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/">
                                <AccountsWrapper />
                              </LinkContainer>
                            </Nav>
                             :
                           <Nav>
                             <LinkContainer to="/">
                               <AccountsWrapper />
                             </LinkContainer>
                           </Nav>}
                        <Nav pullRight>
                          {/* Ir al perfil si está conectado */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Navegacion;
