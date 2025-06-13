import React from 'react';

export default function IdeasList({ ideas }) {
  return (
    <div>
      <h2>Generated Ideas</h2>
      <ul style={{ paddingLeft: 20 }}>
        {ideas.map((idea, idx) => (
          <li key={idx} style={{ marginBottom: 12 }}>{idea}</li>
        ))}
      </ul>
    </div>
  );
}
