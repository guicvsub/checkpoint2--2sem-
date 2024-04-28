
import React, { useEffect, useRef } from "react";

function Banner() {
  const tituloRef = useRef(null);

  useEffect(() => {
    const titulo = tituloRef.current;

    const typeEffect = () => {
      const texto = "My Portfolio I am Web Developer.";
      const textoArray = texto.split('');
      titulo.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => titulo.innerHTML += letra, 75 * i);
      });
      setTimeout(() => {
        titulo.innerHTML = '';
        setTimeout(typeEffect, 500); // Tempo de espera antes de começar a nova digitação
      }, 75 * textoArray.length + 1000); // Tempo total de espera antes de apagar o texto
    };

    typeEffect();

    return () => clearTimeout();
  }, []);

  return (
    <>
      <section className="py-8 z-10 font-serif">
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div className="w-full md:w-1/2 py-8">
            <h1 ref={tituloRef} className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
              Welcome to <br/><span className="text-blue-500 bc">My Portfolio, <br/></span> I am Web Developer.
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-8">
            <img src="https://img.freepik.com/vetores-premium/menino-usando-laptop-mascote-de-desenho-animado-desenho-de-personagens-ilustracao-vetorial_1142-132623.jpg?w=826" className="g-image" alt="Ilustração de um menino usando um laptop"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
