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
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <BrowserRouter>
     <div className="App flex">
     <div>
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
     </div>
    
      

       {/* <Main/> */}
       <ScrollToTop style={{backgroundColor:"#09192e",boxShadow:"30px", borderRadius:"40px"}} color='yellow' width='40' smooth />
      </div>
    </BrowserRouter>
   
   
  );
}

export default App;
