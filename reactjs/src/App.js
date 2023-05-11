import logo from './logo.svg';
import './App.css';
import {Footer} from './components/Footer';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skills} from './components/Skills';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
     
      <Footer/>
      
      
    </div>
  );
}

export default App;
