import React, { Component } from 'react';
import Column from '../containers/Column';

export default function App () {
  return ['Todo', 'In Progress', 'Review', 'Complete'].map((title) => (<Column title={title} />))
};
