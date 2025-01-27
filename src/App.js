import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header"
import Hero from './components/Hero'
import Projects from './components/Projcts'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contacts from './components/Contacts'
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header/>
      <Hero/>
      <Projects/>
      <Experience/>
      <Education/>
     
      <Certifications/>

      <Footer/>
      <Routes>
          <Route/>
      </Routes>
      

       {/* <Main/> */}
      </div>
    </BrowserRouter>
   
  );
}

export default App;
