import { connect } from "react-redux";
import { logIn } from "../../services/user_requests";
import { LoginHOC } from "../../components/users/login_hoc";

const mapStateToProps = store => {
    return {
        authenticated: store.userReducer.authenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (user, rememberMe) =>{       
            dispatch(logIn(user, rememberMe))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginHOC)