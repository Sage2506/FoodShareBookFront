import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";
import ReactAutosuggest from "./autosuggest";

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

   escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  onSuggestionsFetchRequested = ({ value }) => {  
    this.props.get_items(value.trim())
  };

  onSuggestionsClearRequested = () => {
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
      suggestions={this.props.items}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={this.getSuggestionValue}
      renderSuggestion={this.renderSuggestion}
      inputProps={inputProps} />
    );
  }
}

export default ReactAutosuggestHOC;
