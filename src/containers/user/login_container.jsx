import { connect } from "react-redux";
import { log_in } from "../../services/user_requests";
import { LoginHOC } from "../../components/users/login_hoc";

const mapStateToProps = store => {
    return {
        authenticated: store.userReducer.authenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        log_in: user =>{       
            dispatch(log_in(user))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginHOC)