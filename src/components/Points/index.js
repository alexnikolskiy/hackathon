import React from 'react';
import './index.scss';

const Points = (props) => {
  const { total } = props;
  return (
    <div className="points">
      Очки: <span className="points__value">{total}</span>
    </div>
  );
};

export default Points;
