import '../Header/Header.css';
import Logo from '../../assets/logo grande ICr.png';

function Header(){

    return(
        <> 
            <header id="header">
                <div className="header-container">
                    <div className="logo">
                        <img src={Logo} alt="Logo ICr" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#secao1"> projetos </a></li>
                            <li><a href="#secao2"> equipe </a></li>
                            <li><a href="#secao3"> contato </a></li>
                        
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header