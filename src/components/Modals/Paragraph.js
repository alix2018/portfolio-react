import React from 'react';
import './Paragraph.css'

function Paragraph({paragraphInfo}) {
  return (
    <div className="row">
      <div className="column title">
        <div className="context">{paragraphInfo.context}</div>
        <div className="line-context"/>
      </div>
      <div className="column text">
        <p>{paragraphInfo.text}</p>
      </div>
    </div>
  );
}

export default Paragraph;
