import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_ingredient } from "../../services/ingredient_requests";
import { IngredientShow } from "./show";
import { buildImageSecureUrl } from "../lib/common";
import { getIngredient } from '../../actions/ingredient';
import { getAndSendAction } from '../../services/common_requests';
export class IngredientShowHOC extends Component {
  componentDidMount() {
    this.props.getIngredient(this.props.match.params.id)
  }

  render() {
    let { name, description, measures, image, id } = this.props.ingredient;
    let { measuresCatalog, history } = this.props
    return (
      <IngredientShow
        id={id}
        name={name}
        description={description}
        measures={measures !== undefined ? measuresCatalog.filter(measure => measures.includes(measure.id)) : []}
        image={buildImageSecureUrl(image)}
        goBack={history.goBack}
      />
    );
  }
}

const mapStateToProps = (store) => ({
  ingredient: store.ingredientReducer.ingredient,
  measuresCatalog: store.measureReducer.measures,
});

const mapDispatchToProps = (dispatch) => ({
  getIngredient: (id) => {
    dispatch ( getAndSendAction({
      path:`ingredients/${id}`,
      action: getIngredient,
    }))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientShowHOC);
