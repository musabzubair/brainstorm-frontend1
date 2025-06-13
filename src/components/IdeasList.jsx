import React from 'react';

export default function IdeasList({ ideas }) {
  if (!ideas.length) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Generated Ideas</h2>
      <ul className="space-y-3 list-disc list-inside text-gray-800">
        {ideas.map((idea, idx) => (
          <li key={idx} className="bg-gray-100 p-3 rounded-lg shadow-sm">
            {idea}
          </li>
        ))}
      </ul>
    </div>
  );
}
