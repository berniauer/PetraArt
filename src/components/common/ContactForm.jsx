import React, { useState } from 'react';

const API_ENDPOINT = 'https://api.petra-art.at/send-form';

const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

const ContactForm = () => {
  const [fields, setFields] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('info');
  const [isSending, setIsSending] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFields((s) => ({ ...s, [name]: value }));
  };

  const reset = () => setFields({ name: '', email: '', message: '', website: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fields.website && fields.website.trim() !== '') {
      setStatus('Danke.');
      setStatusType('success');
      return;
    }

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setStatus('Bitte fülle alle Pflichtfelder aus.');
      setStatusType('error');
      return;
    }

    if (!validateEmail(fields.email)) {
      setStatus('Bitte gib eine gültige E-Mail-Adresse an.');
      setStatusType('error');
      return;
    }

    setIsSending(true);
    setStatus('Sende...');
    setStatusType('info');

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fields.name, email: fields.email, message: fields.message }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const contentType = res.headers.get('Content-Type') || '';
      let body = { ok: false, error: 'Unbekannte Antwort' };

      if (contentType.includes('application/json')) {
        body = await res.json();
      } else {
        body = await res.text();
      }

      if (body && typeof body === 'object' && 'ok' in body) {
        if (body.ok) {
          setStatus('Danke! Nachricht wurde gesendet.');
          setStatusType('success');
          reset();
        } else {
          setStatus(`Fehler beim Senden: ${body.error || 'Unbekannter Fehler'}`);
          setStatusType('error');
        }
      } else if (res.ok) {
        setStatus('Danke! Nachricht wurde gesendet.');
        setStatusType('success');
        reset();
      } else {
        setStatus(`Fehler beim Senden (HTTP ${res.status}).`);
        setStatusType('error');
      }
    } catch (err) {
      if (err && err.name === 'AbortError') {
        setStatus('Zeitüberschreitung beim Senden. Bitte versuche es erneut.');
      } else {
        setStatus('Fehler beim Senden. Bitte später erneut versuchen.');
      }
      setStatusType('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(''), 8000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
      <label className="sr-only" htmlFor="cf-name">Name</label>
      <input id="cf-name" name="name" value={fields.name} onChange={onChange} placeholder="Name" className="px-4 py-3 border rounded-lg" />

      <label className="sr-only" htmlFor="cf-email">E-Mail</label>
      <input id="cf-email" name="email" type="email" value={fields.email} onChange={onChange} placeholder="E-Mail" className="px-4 py-3 border rounded-lg" />

      <label className="sr-only" htmlFor="cf-message">Ihre Nachricht</label>
      <textarea id="cf-message" name="message" value={fields.message} onChange={onChange} rows={6} placeholder="Ihre Nachricht" className="px-4 py-3 border rounded-lg resize-none" />

      <input name="website" value={fields.website} onChange={onChange} autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />

      <button type="submit" disabled={isSending} className="w-full bg-gold text-white py-3 rounded-lg hover:brightness-95 transition">
        {isSending ? 'Sende...' : 'Anfrage senden'}
      </button>

      {status && (
        <p id="status" className={`text-sm mt-2 ${statusType === 'success' ? 'text-green-600' : statusType === 'error' ? 'text-red-600' : 'text-gray-700'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
