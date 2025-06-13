const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
