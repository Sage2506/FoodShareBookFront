import { Component } from 'react';
import { connect } from "react-redux";
import { get_ingredients_search } from "../../services/ingredient_requests";
import { ListGroup } from "react-bootstrap";
import ReactAutosuggest from "./autosuggest";
import { getAndSendAction } from '../../services/common_requests';
import { getIngredients } from '../../actions/ingredient';

export class ReactAutosuggestHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };    
  }
  
  getSuggestionValue = suggestion => {
    
    return suggestion.name;
  }

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {    
    if (method === 'enter') {
      event.preventDefault();
    }
    this.props.selected_item(suggestion);
    this.setState({
      value: ""
    });
  }

  renderSuggestion = suggestion => {
    return (
      <ListGroup.Item>{suggestion.name}</ListGroup.Item>
    );
  }

  onChange = (event, { newValue, method }) => {     
      this.setState({
        value: this.escapeRegexCharacters(newValue)
      });
  };

  onKeyDown = (event) => {
    if (event.keyCode === 13) { event.preventDefault() }
  };

   escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  onSuggestionsFetchRequested = ({ value }) => {  
    this.props.get_items({'q[name_cont]': value.trim()})
  };

  onSuggestionsClearRequested = () => {
  };

  render() {
    const { value } = this.state;
    const inputProps = {
      placeholder: "Type 'h'",
      value,
      onKeyDown: this.onKeyDown,
      onChange: this.onChange
    };    

    let { items } = this.props;

    return (
      <ReactAutosuggest
      suggestions={items}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={this.getSuggestionValue}
      renderSuggestion={this.renderSuggestion}
      onSuggestionSelected={this.onSuggestionSelected}
      inputProps={inputProps} />
    );
  }
}

const mapStateToProps = store => {
  return{
    items : store.ingredientReducer.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_items: params => {
      dispatch( getAndSendAction({
        path:'ingredients',
        action:getIngredients,
        params : {
          per_page: 10,
          ...params
        }
      }))},
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactAutosuggestHOC)

