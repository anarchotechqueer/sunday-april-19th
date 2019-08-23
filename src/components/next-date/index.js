import React from 'react';
import './style.scss';

export default function NextDate(props) {
  return (
    <div className="next-date">
      <span className="next-date__accent">&#47;&#47; </span>
      the next sunday, april 19th is {props.nextOccurrence}
    </div>
  );
};