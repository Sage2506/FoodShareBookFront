import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Container} from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

export class Layout extends Component {
  render() {
    return (
      <div>
        <header className="sticky-top" >
          <Navbar bg="primary" variant="dark" >
            <Nav className="mr-auto">
              <NavItem><IndexLinkContainer to="/"><Nav.Link ><p>Home</p></Nav.Link></IndexLinkContainer></NavItem>
              <NavItem><IndexLinkContainer to="/dishes/new"><Nav.Link ><p>New dish</p></Nav.Link></IndexLinkContainer></NavItem>
              
            </Nav>
          </Navbar>   
        </header>
        <Container fluid>
          {this.props.children}
        </Container>
        <footer>
                    <h1>Showing footer</h1>
                </footer>
      </div>
    );
  }
}

export default Layout;
