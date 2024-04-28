import React, { useState, useEffect } from "react";


function Banner() {
  const lines = ["Welcome to", "My Portfolio,", "I am Web Developer."];
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // Velocidade de digitação
  const [pauseTime, setPauseTime] = useState(2000); // Tempo para pausar após exibir a frase completa

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = lines[currentLine];

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentLine((currentLine + 1) % lines.length);
        setCurrentText("");
      }

      const newText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(newText);

    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentLine, lines, typingSpeed, pauseTime]);

  return (
    <section className="py-8 z-10 font-serif">
      <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
        <div className="w-full md:w-1/2 py-8">
          <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
            {currentText}
            <span className="text-black">|</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 py-8">
          <img
            src="https://img.freepik.com/vetores-premium/menino-usando-laptop-mascote-de-desenho-animado-desenho-de-personagens-ilustracao-vetorial_1142-132623.jpg?w=826"
            className="g-image"
            alt="Ilustração de um menino usando um laptop"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
