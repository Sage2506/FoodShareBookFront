import { connect } from "react-redux";
import { get_measures } from "../services/measure_requests";
import { Layout } from "../components/Layout";
import { login, logout } from "../actions/user";

const mapStateToProps = store => {
  return {
    measures: store.measureReducer.measures,
    authenticated: store.userReducer.authenticated
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)