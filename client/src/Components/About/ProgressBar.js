import React from 'react';
import { Spring } from 'react-spring';
export const ProgressBar = ({ style, tag, percentage }) => {
  return (
    <div className="bar mb-4">
      <div className="bar__fill" style={style}>
        {' '}
      </div>
      <div className="bar__tag">{tag}</div>
      <Spring
        from={{ number: 0 }}
        to={{ number: percentage }}
        config={{ duration: 2630 }}
      >
        {props => <div className="percent">{props.number.toFixed(0)} %</div>}
      </Spring>
      {/* <span>{percentage}</span> */}
    </div>
  );
};
