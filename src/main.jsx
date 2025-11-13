import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import ErrorBoundary from '@/components/ErrorBoundary';
// global handlers that surface uncaught errors and promise rejections via toasts
import '@/lib/errorHandlers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
