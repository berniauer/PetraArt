// Central API helper used by the frontend to call backend endpoints.
// In dev the Vite proxy handles requests to '/send-form' so VITE_API_URL
// should be empty during local dev. In production set VITE_API_URL to the
// full origin (e.g. https://api.petra-art.at) so requests go to the API.
export const API = import.meta.env.VITE_API_URL || '';

export const sendForm = async (payload) => {
  const base = API.replace(/\/$/, '');
  const url = base ? `${base}/send-form` : '/send-form';

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  // Try to parse a body for richer errors or success payloads
  let body = '';
  try {
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) body = await res.json();
    else body = await res.text();
  } catch (err) {
    // ignore parse errors
  }

  if (!res.ok) {
    // Prefer structured error messages when available
    const errMsg = (body && typeof body === 'object' && body.error) ? body.error : (body || `Status ${res.status}`);
    const e = new Error(errMsg);
    e.responseBody = body;
    e.status = res.status;
    throw e;
  }

  // Return parsed JSON when possible, otherwise raw body
  return body;
};
