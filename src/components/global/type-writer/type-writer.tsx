import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import './Typewriter.css';

/**
 * Typewriter Component
 * Props:
 *  - text: String to type out
 *  - speed: Delay in ms between typing each character (default 100)
 */
const Typewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index));
        index += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor" style={{ visibility: cursorVisible ? 'visible' : 'hidden' }}>|</span>
    </span>
  );
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

export default Typewriter;
