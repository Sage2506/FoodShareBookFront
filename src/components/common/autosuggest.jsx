import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
export class ReactAutosuggest extends Component {
  render() {
    const defaultTheme =  {
      input: 'form-control',
      suggestionsList: 'list-group',
      suggestionContainerOpen: 'list-group'
      };

    let { 
      suggestions, 
      onSuggestionsFetchRequested, 
      onSuggestionsClearRequested, 
      getSuggestionValue, 
      renderSuggestion, 
      onSuggestionSelected, 
      inputProps,
    } = this.props
    return (
      <Autosuggest 
        theme={defaultTheme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={inputProps} />
    );
  }
}

export default ReactAutosuggest;
