import React,{useState} from 'react';
import { FullpageContainer,FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import Psh from './public/JSX/Psh';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <div>Section 1</div>
        <Psh />
      </FullpageSection>
      <FullpageSection>
        <div>Section 2</div>
      </FullpageSection>
      <FullpageSection>
        <div>Section 3</div>
      </FullpageSection>
      <FullpageSection isAutoHeight>
        <footer>Footer</footer>
      </FullpageSection>
    </FullpageContainer>
  );
}
