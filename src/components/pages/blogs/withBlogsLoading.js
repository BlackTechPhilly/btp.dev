import React from 'react';

function WithBlogsLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      //will add loading animation here
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Black Lives Matter
      </p>
    );
  };
}
export default WithBlogsLoading;
