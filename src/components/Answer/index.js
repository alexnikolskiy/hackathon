import React from 'react';
import Image from "react-bulma-components/lib/components/image";
import './index.scss';

const Answer = (props) => {
  const { type } = props;
  return (
    <Image className={`answer answer-${type}`} src={`./img/choice-${type}.png`}/>
  );
};

export default Answer;
