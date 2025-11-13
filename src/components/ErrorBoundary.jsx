import React from 'react';
import { toast } from '@/components/ui/use-toast';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    try {
      toast({
        title: 'Unerwarteter Fehler',
        description: error?.message || String(error),
        duration: 10000,
      });
    } catch (e) {
      // ignore toast errors
      console.error('Toast error while reporting boundary error', e);
    }
    // still log to console for debugging
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white">
          <div className="max-w-2xl w-full rounded border p-6 bg-red-50">
            <h2 className="text-xl font-semibold text-red-700">Ein Fehler ist aufgetreten</h2>
            <p className="mt-2 text-sm text-red-600">{this.state.error?.message || String(this.state.error)}</p>
            <details className="mt-4 text-xs text-gray-700 whitespace-pre-wrap">
              {this.state.info?.componentStack}
            </details>
            <div className="mt-4">
              <button className="btn" onClick={() => window.location.reload()}>Neu laden</button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
