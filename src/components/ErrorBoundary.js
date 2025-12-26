import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);
    this.setState({ 
      error: error?.message || String(error) || 'Unknown error',
      errorInfo: errorInfo?.componentStack || 'No stack trace'
    });
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error 
        ? (typeof this.state.error === 'string' ? this.state.error : this.state.error.message || String(this.state.error))
        : 'An unknown error occurred';
      
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#e5e5e5',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1a1a2e'
        }}>
          <h1 style={{ color: '#ef4444', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ marginBottom: '1rem', color: '#d4d4d4' }}>{errorMessage}</p>
          <p style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#a3a3a3' }}>Please check the browser console for more details.</p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null, errorInfo: null });
              window.location.reload();
            }}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#6366f1',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.background = '#6366f1'}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

