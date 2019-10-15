import { connect } from "react-redux";
import { get_measures } from "../services/measure_requests";
import { clearError } from '../actions/error';
import { Layout } from "../components/Layout";
import { login, logout } from "../actions/user";

const mapStateToProps = store => {
  return {
    measures: store.measureReducer.measures,
    authenticated: store.userReducer.authenticated,
    error: store.errorReducer.error,
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)