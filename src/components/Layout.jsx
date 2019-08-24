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
          <Nav.Item><LinkContainer to="/"><Nav.Link ><p>Home</p></Nav.Link></LinkContainer></Nav.Item>
          <Nav.Item><LinkContainer to="/1"><Nav.Link ><p>Component 1</p></Nav.Link></LinkContainer></Nav.Item>
          <Nav.Item><LinkContainer to="/2"><Nav.Link ><p>Component 2</p></Nav.Link></LinkContainer></Nav.Item>
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
