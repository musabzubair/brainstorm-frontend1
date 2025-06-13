import React, { useState } from 'react';
import useBrainstorm from '../hooks/useBrainstorm';
import IdeasList from './IdeasList';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const TOPICS = ['Sports', 'TV Shows', 'Gardening', 'Motivational', 'Countries', 'Inventions'];
const TONES = ['Funny', 'Horror', 'Mystery', 'Suspense', 'Action'];
const VIDEO_TYPES = ['Story Video', 'ChatGPT Video', 'Split Screen'];

export default function BrainstormForm() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [tone, setTone] = useState(TONES[0]);
  const [audience, setAudience] = useState('');
  const [videoType, setVideoType] = useState(VIDEO_TYPES[0]);

  const { ideas, loading, error, generateIdeas } = useBrainstorm();

  function handleSubmit(e) {
    e.preventDefault();
    if (!audience.trim()) {
      alert('Please enter your target audience');
      return;
    }
    generateIdeas({ topic, tone, audience, videoType });
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20, marginBottom: 40 }}>
        {/* Topic */}
        <div>
          <label htmlFor="topic">Topic</label><br />
          <select id="topic" value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: 8 }}>
            {TOPICS.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Tone */}
        <div>
          <label htmlFor="tone">Tone</label><br />
          <select id="tone" value={tone} onChange={e => setTone(e.target.value)} style={{ width: '100%', padding: 8 }}>
            {TONES.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Target Audience */}
        <div>
          <label htmlFor="audience">Target Audience</label><br />
          <input
            id="audience"
            type="text"
            placeholder="e.g. 30-40 year old moms in the US"
            value={audience}
            onChange={e => setAudience(e.target.value)}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>

        {/* Video Type */}
        <div>
          <label htmlFor="videoType">Video Type</label><br />
          <select id="videoType" value={videoType} onChange={e => setVideoType(e.target.value)} style={{ width: '100%', padding: 8 }}>
            {VIDEO_TYPES.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {loading ? 'Generating...' : 'Generate Ideas'}
        </button>
      </form>

      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSpinner />}
      {!loading && ideas.length > 0 && <IdeasList ideas={ideas} />}
    </>
  );
}
