import React from 'react';
import Column from '../components/Column';

export default function App ({ addTask, people }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '10px',
    }}>
    {
      people
        .map((person, index) => {
          const name = person.get('name');
          return (
            <Column
              addTask={addTask(index)}
              key={name}
              name={name}
              tasks={person.get('tasks')}
              backgroundColor={person.get('backgroundColor')}
            />
          )
        })
    }
    </div>
  );
};
