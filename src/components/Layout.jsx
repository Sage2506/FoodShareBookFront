import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import {Cookies} from 'react-cookie';
import { default as Login } from "../containers/user/login_container";
import { api } from "../services/foodsharebook_api";

export class Layout extends Component {

  checkUserLogged = () => {
    const cookies = new Cookies();
    let token = cookies.get('Authorization')      
    if(typeof token !== 'undefined' && token !== null && token !== '' && token.length > 0) {
      api.defaults.headers.common['Authorization'] = token
      this.props.user_login();
    } 
  }

  logout = () => {
    const cookies = new Cookies();
    cookies.remove('Authorization',  { path: '/' });
    this.props.user_logout();
  }

  componentDidMount = () => {
    if(! this.props.authenticated){
      this.checkUserLogged();
    }
    this.props.get_measures();
  }

  render() {
    if ( this.props.authenticated ){
      return (
        <div>
          <header className="sticky-top" >
            <Navbar bg="primary" variant="dark" >
              <Nav className="mr-auto">
                <NavItem><IndexLinkContainer to="/"><Nav.Link ><p>Home</p></Nav.Link></IndexLinkContainer></NavItem>
                <NavItem><IndexLinkContainer to="/ingredients"><Nav.Link><p>Ingredients</p></Nav.Link></IndexLinkContainer></NavItem>
                <NavItem><Nav.Link onClick={this.logout} ><p>Logout</p></Nav.Link></NavItem>
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
    } else {
      return(
        <Login/>
      )
    }
  }
}

export default Layout;
