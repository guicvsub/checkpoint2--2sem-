import Header from "./companetes/Header/Header";
import Footer from "./companetes/Footer/Fotter";
import Form from "./companetes/Form/Form";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from "./App";
import Projects from "./companetes/projects/projects";
import Team  from './companetes/Team/Team'



const  AppRotas = ()=>{
    return(
       
            <Routes>
                <Route  path="/" element={<App/>}></Route>
                     <Route  path="/contato" element={<Form/>}></Route>
                     <Route  path="/listProjects" element={<Projects/>}></Route>
                     <Route  path="/Team" element={<Team/>}></Route>
              
            </Routes>
        
        
    )
}
export default AppRotas