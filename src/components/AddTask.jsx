import React, { Component, Fragment } from 'react';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  addTask = () => {
    if (this.state.value !== '') {
      this.props.addTask(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <Fragment>
        <input
          value={this.state.value}
          onChange={({ target: { value } }) => {
            this.setState({ value })
          }}
        />
        <div
          onClick={this.addTask}
        >
          Add task
        </div>
      </Fragment>
    );
  }
};
