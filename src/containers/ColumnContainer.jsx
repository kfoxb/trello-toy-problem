import React, { Component } from 'react';
import AddTask from '../components/AddTask';
import Column from '../components/Column';

export default class ColumnContainer extends Component {
  constructor(props) {
    super(props);
    this.name = 'Column';
  }

  render() {
    return (
      <Column
        addTask={this.props.addTask}
        backgroundColor={this.props.backgroundColor}
        name={this.props.name}
      />
    );
  }
}
