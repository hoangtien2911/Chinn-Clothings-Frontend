import React from 'react';
import "./Title.scss"
const Title = ({ title }) => {
  return (
    <div className="title">
      <h2 className="fs-30 fw-5 position-relative d-inline-block">{title}</h2>
    </div>
  );
};

export default Title;