import React from 'react';
import './heading.scss';
function Headings({ title, color }) {
  return (
    <div className="heading">
      <div className="row ">
        <div className="col-sm-12">
          <h1 style={color}>{title}</h1>
          <div className="line" />
        </div>
      </div>
    </div>
  );
}

export default Headings;
