import { connect } from "react-redux";
import { get_measures } from "../services/measure_requests";
import { Layout } from "../components/Layout";

const mapStateToProps = store => {
  return {
    measures: store.measureReducer.measures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_measures: () => {
      dispatch(get_measures())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)