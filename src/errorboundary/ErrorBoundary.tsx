import React from "react";
import { Box, Typography } from "@mui/material";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }
  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Box>
          <Box
            component={"img"}
            src='data:image/jpeg;base64,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'
            alt={"error"}
            width={"100%"}
            height={"100%"}
          />
          <Typography textAlign={'center'} variant="h3" fontWeight={600}>Something went wrong!</Typography>
        </Box>
      );
    }
    return children;
  }
}

export default ErrorBoundary;