import React, { Component } from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class Layout extends Component {
  render() {
    return (
      <div>
        <header className="sticky-top" >
          <Navbar bg="primary" variant="dark" >
          <Nav className="mr-auto">
          <Nav.Item><Nav.Link ><LinkContainer to="/"><p>Home</p></LinkContainer></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link ><LinkContainer to="/1"><p>Component 1</p></LinkContainer></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="disabled" disabled ><LinkContainer to="/2"><p>Component 2</p></LinkContainer></Nav.Link></Nav.Item>
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
