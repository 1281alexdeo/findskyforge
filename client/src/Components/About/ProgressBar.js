import React from 'react';
export const ProgressBar = ({ style, tag, percentage }) => {
  return (
    <div className="bar mb-4">
      <div className="bar__fill" style={style}>
        {' '}
      </div>
      <div className="bar__tag">{tag}</div>
      <span>{percentage}</span>
    </div>
  );
};
