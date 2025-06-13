import React from 'react';
import BrainstormForm from './components/BrainstormForm';
import IdeasList from './components/IdeasList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import useBrainstorm from './hooks/useBrainstorm';

export default function App() {
  const { ideas, loading, error, generateIdeas } = useBrainstorm();

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>AI Brainstorm Tool</h1>

      {/* Pass generateIdeas and loading as props to BrainstormForm */}
      <BrainstormForm onSubmit={generateIdeas} loading={loading} />

      {/* Show error message if error exists */}
      {error && <ErrorMessage message={error} />}

      {/* Show loading spinner if loading */}
      {loading && <LoadingSpinner />}

      {/* Show list of ideas when not loading and ideas exist */}
      {!loading && ideas.length > 0 && <IdeasList ideas={ideas} />}
    </div>
  );
}
