import React from 'react';
import './ParagraphTitle.css';

function ParagraphTitle({title}) {
  return (
    <div className="column title">
      <div className="context">{title}</div>
      <div className="line-context"/>
    </div>
  );
}

export default ParagraphTitle;
