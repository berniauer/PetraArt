// src/lib/api.js
// Dev: VITE_API_URL leer lassen -> Vite-Proxy leitet /send-form an localhost:3000
// Prod: VITE_API_URL = https://api.petra-art.at -> direkte Cross-Origin-Anfrage (CORS im Backend erlauben)

export const API = (import.meta.env?.VITE_API_URL || '').replace(/\/$/, '');

export const sendForm = async (payload) => {
  const url = API ? `${API}/send-form` : '/send-form';

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let body = '';
  try {
    const ct = res.headers.get('content-type') || '';
    body = ct.includes('application/json') ? await res.json() : await res.text();
  } catch (_) {}

  if (!res.ok) {
    const errMsg = (body && typeof body === 'object' && body.error) ? body.error : (body || `Status ${res.status}`);
    const e = new Error(errMsg);
    e.responseBody = body;
    e.status = res.status;
    throw e;
  }

  return body;
};
