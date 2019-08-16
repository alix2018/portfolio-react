import React from 'react';
import './Paragraph.css';

function Paragraph({information, newClass}) {
  return (
    <div className={`row ${newClass}`}>
      <div className="column title">
        <div className="context">{information.context}</div>
        <div className="line-context"/>
      </div>
      <div className="column text">
        <p>{information.text}</p>
      </div>
    </div>
  );
}

export default Paragraph;
