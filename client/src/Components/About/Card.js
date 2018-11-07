import React from 'react';
export const Card = ({ icon, title, description }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="icon-background">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
