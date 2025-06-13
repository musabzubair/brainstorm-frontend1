import { useState } from 'react';

// Load backend URL from .env file
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function useBrainstorm() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Main function to call your backend API
  const generateIdeas = async ({ topic, tone, audience, videoType }) => {
    setLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const response = await fetch(`${BACKEND_URL}/api/brainstorm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          tone,
          audience,
          video_type: videoType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch ideas');
      }

      const data = await response.json();
      setIdeas(data.ideas || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { ideas, loading, error, generateIdeas };
}
