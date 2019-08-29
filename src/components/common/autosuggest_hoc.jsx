import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";
import ReactAutosuggest from "./autosuggest";

export class ReactAutosuggestHOC extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    
    return this.props.ingredients //.filter(ingredient => regex.test(ingredient.name));
  }

  getSuggestionValue = suggestion => {
    return suggestion.name;
  }

  renderSuggestion = suggestion => {
    return (
      <ListGroup.Item>{suggestion.name}</ListGroup.Item>
    );
  }

  onChange = (event, { newValue, method }) => {        
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.get_ingredients();
    //this.setState({
      //suggestions: this.getSuggestions(value)
    //});
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value } = this.state;
    const inputProps = {
      placeholder: "Type 'h'",
      value,
      onChange: this.onChange
    };    

    return (
      <ReactAutosuggest
      suggestions={this.props.ingredients}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={this.getSuggestionValue}
      renderSuggestion={this.renderSuggestion}
      inputProps={inputProps} />
    );
  }
}

export default ReactAutosuggestHOC;
