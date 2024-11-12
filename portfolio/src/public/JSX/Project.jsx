import React from "react";
import {useState} from 'react';
import ChildComponent1 from "./childcomponet/ChildComponent1";
import ChildComponent2 from "./childcomponet/ChildComponent2";
import ChildComponent3 from "./childcomponet/ChildComponent3";
import '../CSS/project.css';


export default function Project() {
    const [activeComponent, setActiveComponent] = useState('child1');

    return(
        <div className="project">
            <div className="activebutton">
                <button className={activeComponent === 'child1' ? 'button1 active' : 'button1'} onClick={() => setActiveComponent("child1")}>프로젝트1</button>
                <button className={activeComponent === 'child2' ? 'button2 active' : 'button2'} onClick={() => setActiveComponent("child2")}>프로젝트2</button>
                <button className={activeComponent === 'child3' ? 'button3 active' : 'button3'} onClick={() => setActiveComponent("child3")}>프로젝트3</button>
            </div>
            <div className="project_container">
                {activeComponent === 'child1' && <ChildComponent1/>}
                {activeComponent === 'child2' && <ChildComponent2/>}
                {activeComponent === 'child3' && <ChildComponent3/>}
            </div>
        </div>
        
    )
}