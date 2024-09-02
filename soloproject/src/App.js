import './App.css';
import Header from './public/JSX/Header/Header';
import Section from './public/JSX/Section/Section';
import Footer from './public/JSX/Footer/Footer';
// import React,{useState} from 'react';

export default function App() {
  // const [value, setValue] = useState();


  return (
    <div className='App'>
      <Header />
      <Section />
      <Footer />
    </div>

  );
}
