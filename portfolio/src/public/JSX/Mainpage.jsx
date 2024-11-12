import React from "react";
import '../CSS/mainpage.css';
import main_img from '../IMG/main_img.png';

export default function Mainpage() {

    return(
        <div className="mainpage">
            <div className="mainpage_text1">안녕하세요</div>
            <div className="mainpage_text2">풀스텍을 넘어 토탈스텍 개발자 박성호입니다</div>
            <div className="mainpage_img"><img src={main_img} alt="메인화면"/></div>
        </div>
    )
}