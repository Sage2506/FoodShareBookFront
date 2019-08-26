import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

export class Layout extends Component {
  render() {
    return (
      <div>
        <header className="sticky-top" >
          <Navbar bg="primary" variant="dark" >
            <Nav className="mr-auto">
              <NavItem><IndexLinkContainer to="/"><Nav.Link ><p>Home</p></Nav.Link></IndexLinkContainer></NavItem>
              <NavItem><IndexLinkContainer to="/1"><Nav.Link ><p>Component 1</p></Nav.Link></IndexLinkContainer></NavItem>
              <NavItem><IndexLinkContainer to="/2"><Nav.Link ><p>Component 2</p></Nav.Link></IndexLinkContainer></NavItem>
            </Nav>
          </Navbar>   
        </header>
        {this.props.children}
        <footer>
                    <h1>Showing footer</h1>
                </footer>
      </div>
    );
  }
}

export default Layout;
