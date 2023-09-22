import React, { Component, ReactNode } from "react";

interface TestErrorBoundaryProps {
  children: ReactNode;
}

class TestErrorBoundary extends Component<TestErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred</div>;
    }

    return this.props.children;
  }
}

export default TestErrorBoundary;
