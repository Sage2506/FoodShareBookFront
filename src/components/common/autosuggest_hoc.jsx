import React, { Component } from 'react';
import {  } from "react-autosuggest";
import ReactAutosuggest from "./autosuggest";
const languages = [
    {
      name: 'C',
      year: 1972
    },
    {
      name: 'C#',
      year: 2000
    },
    {
      name: 'C++',
      year: 1983
    },
    {
      name: 'Clojure',
      year: 2007
    },
    {
      name: 'Elm',
      year: 2012
    },
    {
      name: 'Go',
      year: 2009
    },
    {
      name: 'Haskell',
      year: 1990
    },
    {
      name: 'Java',
      year: 1995
    },
    {
      name: 'Javascript',
      year: 1995
    },
    {
      name: 'Perl',
      year: 1987
    },
    {
      name: 'PHP',
      year: 1995
    },
    {
      name: 'Python',
      year: 1991
    },
    {
      name: 'Ruby',
      year: 1995
    },
    {
      name: 'Scala',
      year: 2003
    }
  ];


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
    return languages.filter(language => regex.test(language.name));
  }

  getSuggestionValue = suggestion => {
    return suggestion.name;
  }

  renderSuggestion = suggestion => {
    return (
      <span>{suggestion.name}</span>
    );
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <ReactAutosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={this.getSuggestionValue}
      renderSuggestion={this.renderSuggestion}
      inputProps={inputProps} />
    );
  }
}

export default ReactAutosuggestHOC;
