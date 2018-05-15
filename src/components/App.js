import React from 'react';
import Column from '../containers/ColumnContainer';

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
              backgroundColor={person.get('backgroundColor')}
            />
          )
        })
    }
    </div>
  );
};
