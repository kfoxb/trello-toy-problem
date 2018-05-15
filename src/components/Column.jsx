import React, { Component } from 'react';
import AddTask from './/AddTask';

export default function Column({ addTask, backgroundColor, name }) {
  return (
    <div style={{
      textAlign: 'center',
    }}>
    <div
      style={{
        backgroundColor,
      }}>
      {name}
    </div>
    <AddTask addTask={addTask}/>
  </div>
  );
}
