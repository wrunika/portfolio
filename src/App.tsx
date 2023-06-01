import React from 'react';
import './App.css';
import {Header} from "./common/components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {AboutMe} from "./components/AboutMe/AboutMe";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
