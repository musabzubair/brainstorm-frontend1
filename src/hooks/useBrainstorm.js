const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

async function generateIdeas({ topic, tone, audience, videoType }) {
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

    const data = await response.json();

    if (!response.ok) throw new Error(data.error || 'Failed to fetch ideas');

    setIdeas(data.ideas || []);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
