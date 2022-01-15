import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Container, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { get_measures } from "../services/measure_requests";
import { login, logout } from "../actions/user";
import { clearError } from '../actions/error';
import { IndexLinkContainer } from "react-router-bootstrap";
import {Cookies} from 'react-cookie';
import LoginHOC from "./users/login_hoc";
import { api } from "../services/foodsharebook_api";
import { getCurrentUserData } from '../services/user_requests';

export class Layout extends Component {

  checkUserLogged = () => {
    const cookies = new Cookies();
    let token = cookies.get('Authorization')
    if(typeof token !== 'undefined' && token !== null && token !== '' && token.length > 0) {
      api.defaults.headers.common['Authorization'] = token
      this.props.user_login();
      this.props.loadUserData();
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
    let {error, authenticated, clearError, currentUser } = this.props
    if ( authenticated ){
      return (
        <div>
          <Modal show={error !== undefined && error !== null} onHide={clearError}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{error}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={clearError}>
                Accept
              </Button>
            </Modal.Footer>
          </Modal>
          <header className="sticky-top" >
            <Navbar bg="primary" variant="dark" >
              <Nav className="mr-auto">
                <NavItem><IndexLinkContainer to="/"><Nav.Link ><p>Home</p></Nav.Link></IndexLinkContainer></NavItem>
                <NavItem><IndexLinkContainer to="/"><Nav.Link ><p>Dishes</p></Nav.Link></IndexLinkContainer></NavItem>
                <NavItem><IndexLinkContainer to="/ingredients"><Nav.Link><p>Ingredients</p></Nav.Link></IndexLinkContainer></NavItem>
                { currentUser.role_id === 1 && <NavItem><IndexLinkContainer to="/users"><Nav.Link><p>Users</p></Nav.Link></IndexLinkContainer></NavItem>}
                { currentUser.role_id === 1 && <NavItem><IndexLinkContainer to="/roles"><Nav.Link><p>Roles</p></Nav.Link></IndexLinkContainer></NavItem>}
                { currentUser.role_id === 1 && <NavItem><IndexLinkContainer to="/Permissions"><Nav.Link><p>Permissions</p></Nav.Link></IndexLinkContainer></NavItem> }
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
        <LoginHOC/>
      )
    }
  }
}

const mapStateToProps = store => {
  return {
    measures: store.measureReducer.measures,
    authenticated: store.userReducer.authenticated,
    error: store.errorReducer.error,
    currentUser: store.userReducer.current_user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_measures: () => {
      dispatch(get_measures())
    },
    user_login: () => {
      dispatch(login());
    },
    user_logout: () => {
      dispatch(logout())
    },
    clearError: () => {
      dispatch(clearError())
    },
    loadUserData: () => {
      dispatch(getCurrentUserData())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
