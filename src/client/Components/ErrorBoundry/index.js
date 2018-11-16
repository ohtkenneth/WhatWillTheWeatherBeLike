import React from 'react';

export default class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      errorInfo: info
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <details>
            { this.state.error && this.state.error.toString() }
            <br/>
            { this.state.errorInfo.componentStack }
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}