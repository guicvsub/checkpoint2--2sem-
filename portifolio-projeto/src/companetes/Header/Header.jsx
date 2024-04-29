import React from 'react';
import { Form, Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.png'
import Projects from '../projects/projects';
function Header(){



    return (
      <>


    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

      <div className="mb-2 sm:mb-0 flex flex-row">
        <div className="h-10 w-10 self-center mr-2">
          <img className="h-10 w-10 self-center" src={logo} alt="Logo" />
        </div>
        <div>
          <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Equipe Timão</a><br />
          <span className="text-xs text-grey-dark">Alunos Fiap 1ESPB</span>
        </div>
      </div>

      <div className="sm:mb-0 self-center">
        <Link to='/'  className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</Link >
        <Link to='/Team'  className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Team</Link >
          <Link to="/ListProjects" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Nossos Projetos</Link>
        <Link to="/contato" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Contato</Link>
      </div>
    </nav>



 
      </>
    )
    }
  
  
  export default Header
  