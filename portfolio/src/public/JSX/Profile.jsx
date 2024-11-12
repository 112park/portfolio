import React from "react";
import '../CSS/profile.css';
import subimg from '../IMG/subimg.png';

export default function Profile() {

    return(
        <div className="profile">
            <div className="profile_text">About Me</div>
            <div className="profile_subimg"><img src={subimg} alt="subimg" className="subimg"/></div>
            <div className="profile_about">
                <h3>MY INTRO</h3>
                <p>먼저 찾아주셔서 감사합니다</p>
                <p>
                    
                    안녕하세요, 저는 프론트엔드 개발자로 성장하고자 하는 박성호입니다.
                    저는 고등학교까지 태권도와 합기도 선수로 활동했으며
                    특히 합기도는 비주류 종목이지만 세계 대회에 국가대표로 출전한 경험이 있습니다.
                    그러나 중간에 부상으로 인해 운동을 그만두게 되었고, 이후 용접 일을 시작했습니다.
                    건강상의 문제로 그 일을 지속할 수 없게 되어 새로운 진로를 모색하게 되었습니다.
                    2021년에는 웹디자인 과정을 수료하며 처음으로 코딩을 접하게 되었고 웹디자이너로도 반년정도 일했고
                    그 과정에서 HTML,CSS,JS등 프론트엔드 언어를 가끔씩 접하다보니 개발에 흥미를 느끼기 시작했습니다.
                    이를 계기로 AICC 과정을 통해 보다 깊이 있는 학습을 이어갔고
                    그 중에서도 프론트엔드 분야가 저에게 잘 맞는다는 것을 알게 되어 프론트엔드 개발자로서의 진로를 확고히 다지게 되었습니다.
                </p>
                <div className="">
                    생년월일 : 1998.01.12
                    휴대폰번호 : 01055387311
                    이메일 : psh676@gmail.com
                    거주지 : 인천 서구
                    연령 : 만26세
                </div>
                <button>이력서</button>
            </div>
        </div>
    )
}