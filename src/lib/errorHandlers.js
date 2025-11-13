import { toast } from '@/components/ui/use-toast';

// Global error handlers to surface unexpected runtime errors and promise rejections
// These will show a toast so the user sees that something failed instead of a blank page.
function handleGlobalError(ev) {
  try {
    // ev may be an ErrorEvent or similar
    const msg = ev?.message || (ev?.error && ev.error.message) || String(ev);
    // ignore noisy extension errors from moz-extension if desired
    const source = ev?.filename || ev?.error?.fileName || '';
    if (source && source.startsWith('moz-extension://')) {
      // still log but do not spam UI
      console.warn('Ignored moz-extension error', msg, source);
      return;
    }

    console.error('Global error captured', ev);
    toast({ title: 'Client-Fehler', description: String(msg), duration: 10000 });
  } catch (e) {
    console.error('Error in global error handler', e);
  }
}

function handleRejection(ev) {
  try {
    const reason = ev?.reason || ev;
    const msg = (reason && reason.message) ? reason.message : String(reason);
    // If the rejection originates from an extension, ignore UI spam
    if (reason && reason.stack && reason.stack.includes('moz-extension')) {
      console.warn('Ignored moz-extension rejection', reason);
      return;
    }
    console.error('Unhandled promise rejection', reason);
    toast({ title: 'Fehler', description: msg, duration: 10000 });
  } catch (e) {
    console.error('Error in rejection handler', e);
  }
}

window.addEventListener('error', handleGlobalError);
window.addEventListener('unhandledrejection', handleRejection);

export { handleGlobalError, handleRejection };
