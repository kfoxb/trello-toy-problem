import React, { Component } from 'react';
import App from '../components/App';
import { fromJS } from 'immutable';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: fromJS([
        {
          name: 'Jim',
          backgroundColor: 'orange',
          tasks: [],
        },
      ]), 
    }
  }

  addTask = (index) => (task) => {
    const path = [index, 'tasks'];
    const { people } = this.state;
    const newPeople = people.updateIn(path, (tasks) => tasks.push(task));
    this.setState((prevState) => {
      return {
        people: newPeople,
      }
    });
  };

  render() {
    return (
      <App
        people={this.state.people}
        addTask={this.addTask}
      />
    )
  }
}
