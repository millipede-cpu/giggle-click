import React, { Component, ErrorInfo, ReactNode } from "react";

interface CustomErrorBoundaryProps {
  children: ReactNode;
}

interface CustomErrorBoundaryState {
  hasError: boolean;
}

class CustomErrorBoundaryWrapper extends Component<
  CustomErrorBoundaryProps,
  CustomErrorBoundaryState
> {
  constructor(props: CustomErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Handle errors differently in the test environment, e.g., log them
    console.error("Test Error Boundary:", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render an error message for testing
      return <div>Error occurred during testing</div>;
    }
    return this.props.children;
  }
}

export default CustomErrorBoundaryWrapper;
