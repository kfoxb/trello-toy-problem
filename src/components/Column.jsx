import React from 'react';
import AddTask from './AddTask';
import Task from './Task';

export default function Column({ addTask, backgroundColor, name, tasks }) {
  return (
    <div style={{
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    }}>
    <div
      style={{
        // backgroundColor,
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
        background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)'
      }}>
      {name}
    </div>
    { tasks.map((task, index) => (
      <Task
        task={task}
        index={index}
        key={task}
      />
    )) }
    <AddTask addTask={addTask}/>
  </div>
  );
}
