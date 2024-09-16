import React, { useEffect, useRef } from "react";
require("./ScrollingText.css");

const ScrollingText = () => {
  const words = [
    "the",
    "story",
    "of",
    "CRED",
    "begins",
    "with",
    "trust.",
    "we",
    "believe",
    "individuals",
    "who've",
    "proven",
    "their",
    "trustworthiness",
    "deserve",
    "better:",
    "better",
    "experiences,",
    "better",
    "rewards,",
    "better",
    "rules.",
    "this",
    "is",
    "the",
    "status",
    "quo",
    "we're",
    "building.",
    "make",
    "it",
    "to",
    "the",
    "club,",
    "and",
    "experience",
    "the",
    "ascension",
    "yourself.",
  ];

  const wordsRef = useRef([]);
  const containerRef = useRef(null);
    
  useEffect(() => {
    
    const getLines = (words) => {
        const lines = [];
        let currentLine = [];
        let lastTop = -1;
    
        words.forEach(word => {
          const rect = word.getBoundingClientRect();
          if (lastTop === -1 || Math.abs(rect.top - lastTop) < 1) {
            currentLine.push(word);
          } else {
            lines.push(currentLine);
            currentLine = [word];
          }
          lastTop = rect.top;
        });
    
        if (currentLine.length > 0) {
          lines.push(currentLine);
        }
    
        return lines;
      };
    
    const handleScroll = () => {
        if (!containerRef.current) return;
        
        const lines = getLines(wordsRef.current);
        
        lines.forEach((line, lineIndex) => {
          let isLineInView = false;
          line.reverse().forEach((word, wordIndex) => {
            const rect = word.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              isLineInView = true;
              const delay = wordIndex * 30; 
              if (rect.top < 500 + delay) {
                word.style.color = "white"; 
              } else {
                word.style.color = "rgb(51, 51, 51)";
              }
            } else {
              word.style.color = "rgb(51, 51, 51)";
            }
          });
          if (!isLineInView) {
            line.forEach(word => word.style.color = "rgb(51, 51, 51)");
          }
        });
      };
    

    window.addEventListener("scroll", throttle(handleScroll,20));
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", throttle(handleScroll,20));
    };
  }, []);

  return (
    <>
      <div className="sc-8teloe-0 fITuWz" ref={containerRef}>
        <div className="sc-8teloe-1 frggdo">
          <div className="sc-8teloe-2 hOgyUx">NOT EVERYONE MAKES IT IN.</div>
          <div className="sc-8teloe-3 daYEst">
            {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => (wordsRef.current[index] = el)}
                style={{ marginRight: "18px"}}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export function throttle(func, limit) {
    let lastFunc;
    let lastRan;
  
    return function() {
      const context = this;
      const args = arguments;
  
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  

export default ScrollingText;
