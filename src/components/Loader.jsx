
import React, { useEffect, useState } from "react";

const codeLines = [
  'const portfolio = "Aditya Jadon";',
  'function loadPortfolio() {',
  '  // Initializing...',
  // '  return <Portfolio />;',
  '}',
];

const Loader = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      if (typedChars < codeLines[currentLine].length) {
        const typeTimer = setTimeout(() => setTypedChars(typedChars + 1), 40);
        return () => clearTimeout(typeTimer);
      } else {
        const nextLineTimer = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setTypedChars(0);
        }, 350);
        return () => clearTimeout(nextLineTimer);
      }
    }
    // Blinking cursor
    const cursorTimer = setInterval(() => setShowCursor((c) => !c), 400);
    return () => clearInterval(cursorTimer);
  }, [currentLine, typedChars]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: '#030412' }}>
      <div className="flex flex-col items-center w-full">
        <div className="w-[90vw] max-w-xl bg-[#161a31]/80 rounded-2xl shadow-2xl p-8 backdrop-blur-xl border border-white/10">
          <div className="font-mono text-lg md:text-2xl text-[#57db96] leading-relaxed text-left min-h-[180px]">
            {codeLines.slice(0, currentLine).map((line, idx) => (
              <div key={idx} className="mb-2">{line}</div>
            ))}
            {currentLine < codeLines.length && (
              <div className="mb-2">
                {codeLines[currentLine].slice(0, typedChars)}
                <span className="text-[#ca2f8c]">{showCursor ? "|" : " "}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 2s linear infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
