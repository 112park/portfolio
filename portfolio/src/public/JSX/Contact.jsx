import React from "react";
import '../CSS/contact.css';
import emot from "../IMG/emot.png";

export default function Contact() {

    return(
        <div className="contact">
            <div className="contact_container">
                <h2>Contact</h2>
                    <label htmlFor="email">이메일</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue="psh676@naver.com"
                    />

                    <label htmlFor="phone">전화번호</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      defaultValue="01055387311"
                    />

                    <label htmlFor="authorName">작성자 이름란</label>
                    <input
                      type="text"
                      id="authorName"
                      name="authorName"
                    />

                    <label htmlFor="authorEmail">작성자 이메일 주소란</label>
                    <input
                      type="email"
                      id="authorEmail"
                      name="authorEmail"
                    />

                    <label htmlFor="title" className="full-width">글제목</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="full-width"
                    />

                    <label htmlFor="message" className="full-width">하고싶은말</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="full-width"
                    />

                    <div className="qr-code">
                      <label>이력서</label>
                      <img src={emot} alt="이력서 QR Code" />
                    </div>

                    <div className="qr-code">
                      <label>연락처</label>
                      <img src={emot} alt="연락처 QR Code" />
                    </div>
            </div>
        </div>
    )
}
