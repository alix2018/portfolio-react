import React from 'react';
import './Paragraph.css';
import ParagraphTitle from './ParagraphTitle';
import ParagraphText from './ParagraphText';

function Paragraph({children}) {
  return (
    <div className="row">
      <ParagraphTitle title={children.context}/>
      <ParagraphText text={children.text}/>
    </div>
  );
}

export default Paragraph;
