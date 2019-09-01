import React from 'react';
import './ParagraphText.css';

const parse = require('html-react-parser');

function ParagraphText({text}) {
  return (
    <div className="column text">
      <p>{parse(text)}</p>
    </div>
  );
}

export default ParagraphText;
