import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
export class ReactAutosuggest extends Component {
    render() {
        const defaultTheme =  {
            input: 'form-control',
            suggestionsList: 'list-group',
            suggestionContainerOpen: 'list-group'
          };
        return (            
            <Autosuggest 
            theme={defaultTheme}
            suggestions={this.props.suggestions}
            onSuggestionsFetchRequested={this.props.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.props.onSuggestionsClearRequested}
            getSuggestionValue={this.props.getSuggestionValue}
            renderSuggestion={this.props.renderSuggestion}
            inputProps={this.props.inputProps} />
        );
    }
}

export default ReactAutosuggest;
