import React,{useState} from 'react';
import { FullpageContainer,FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import './public/CSS/index.css';
import Mainpage from './public/JSX/Mainpage';
import Nav from './public/JSX/nav';
import Profile from './public/JSX/Profile';
import Project from './public/JSX/Project';
import Myskill from './public/JSX/Myskill';
import Contact from './public/JSX/Contact';
import Footer from './public/JSX/Footer';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='web'>
      <Nav />
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        transitionDuration={1000}
      >
        <FullpageSection name='main'>
          <Mainpage />
        </FullpageSection>
        <FullpageSection name='profile'>
          <Profile />
        </FullpageSection>
        <FullpageSection name='project'>
          <Project />
        </FullpageSection>
        <FullpageSection name='myskill'>
          <Myskill />
        </FullpageSection>
        <FullpageSection name='contact'>
          <Contact />
        </FullpageSection>
        <FullpageSection isAutoHeight>
          <Footer />
        </FullpageSection>
      </FullpageContainer>
    </div>
  );
}

