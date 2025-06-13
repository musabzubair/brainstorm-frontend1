import React from 'react';
import BrainstormForm from './components/BrainstormForm';
import IdeasList from './components/IdeasList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import useBrainstorm from './hooks/useBrainstorm';

export default function App() {
  const { ideas, loading, error, generateIdeas } = useBrainstorm();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          AI Brainstorm Generator
        </h1>
        <BrainstormForm onSubmit={generateIdeas} />
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && ideas.length > 0 && <IdeasList ideas={ideas} />}
      </div>
    </div>
  );
}
