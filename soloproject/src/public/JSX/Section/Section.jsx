import '../../CSS/Section.css';
import { useState } from "react";

export default function Section({setvalue}) {    

  const [sectionclick,setsectionclick]=useState();
  const click = (e) =>{
    setsectionclick(e.target.value)
    setvalue()
  }

  return (
    <div className='Section'>
        <button onClick={click}>section</button>
    </div>
  );
}