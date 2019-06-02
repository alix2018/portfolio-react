import React, {useState, useEffect} from 'react';
import './Typewriter.css';

function Typewriter({fullTexts, period}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  function tick() {
    const fullText = fullTexts[textIndex];
    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
    } else {
      setText(fullText.substring(0, text.length + 1));
    }

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && text === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setDelta(period);
      setTextIndex((textIndex + 1) % fullTexts.length);
    }
    setIsTicking(false);
  }

  useEffect(() => {
    if (!isTicking) {
      setIsTicking(true);
      setTimeout(tick, delta);
    }
  }, [isTicking]);

  return (
    <div className="typewriter animated fadeInUp">{text}
      <span className="cursor animated fadeInUp">|</span>
    </div>
  );
}

export default Typewriter;
