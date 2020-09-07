import React from "react";

function LoadingBlog(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "100px" }}>
        Black Lives Matter
      </p>
    );
  };
}
export default LoadingBlog;
