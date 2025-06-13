import React from 'react';
import BrainstormForm from './components/BrainstormForm';
import IdeasList from './components/IdeasList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import useBrainstorm from './hooks/useBrainstorm';

export default function App() {
  const { ideas, loading, error, generateIdeas } = useBrainstorm();

  return (
    <div>
      <h1>AI Brainstorm Generator</h1>
      <BrainstormForm onSubmit={generateIdeas} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <IdeasList ideas={ideas} />
    </div>
  );
}
