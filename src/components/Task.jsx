import React from 'react';

export default function Task({ task, index }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
    }}>
    <p style={{
      justifySelf: 'center',
    }}>{task}</p>
  <input
    type="checkbox"
    style={{
      marginLeft: 'auto',
    }}
  />
    </div>
  );
}
