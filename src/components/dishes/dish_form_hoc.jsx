import React, { Component } from 'react';

export class DishFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish : []
    };
  }

  create_dish = () => {
    this.props.create_dish(this.state.dish);
  }

  render() {
    return (
          <div>
              
          </div>
      );
  }
}

export default DishFormHOC;
