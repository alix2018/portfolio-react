import React from 'react';
import './Paragraph.css';

const parse = require('html-react-parser');

function Paragraph({children}) {
  return (
    <article className="paragraph">
      <div className="title">
        <h1>{children.context}</h1>
        <div className="line-context"/>
      </div>
      <p>{parse(children.text)}</p>
    </article>
  );
}

export default Paragraph;
