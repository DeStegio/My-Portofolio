import React, { useEffect, useRef } from 'react';

const TypingEffect = () => {
    const textElement = useRef(null); // Ref to the DOM element
    const text = "Hello I am George and I'm a junior web developer!";
    const typingSpeed = 100; // Time delay for typing each character
    const pauseBetweenLoops = 2000; // Delay before restarting the effect
  
    useEffect(() => {
      const typeText = (text, element, speed) => {
        let i = 0;
  
        const typeWriter = () => {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed); // Continue typing
          } else {
            setTimeout(() => {
              element.innerHTML = ""; // Clear the text
              i = 0; // Reset the counter
              typeWriter(); // Restart typing
            }, pauseBetweenLoops);
          }
        };
  
        typeWriter();
      };
  
      if (textElement.current) {
        typeText(text, textElement.current, typingSpeed);
      }
    }, []); // The empty dependency array ensures this runs only once on mount
  
  return (
    <div
      ref={textElement}
      className="typing-effect"

    ></div>
  );
};

export default TypingEffect;