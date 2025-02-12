import React from "react";
import '../CSS/contact.css';
import qrCode1 from "../IMG/qrcode1.png";
import qrCode2 from "../IMG/qrcode2.png";


export default function Contact() {
    return (
        <div className="contact-container">
            {/* 연락처 및 이메일 제목 */}
            <div className="contact-header">연락처 및 이메일</div>

            {/* 이메일 & 전화번호 입력 */}
            <div className="contact-info">
                <input type="email" id="email" name="email" defaultValue="psh676@naver.com" />
                <input type="text" id="phone" name="phone" defaultValue="01055387311" />
            </div>

            {/* 입력 폼 */}
            <div className="contact-form">
                <div className="form-group">
                    <input type="text" id="authorName" name="authorName" placeholder="작성자 이름란" />
                    <input type="email" id="authorEmail" name="authorEmail" placeholder="작성자 이메일 주소란" />
                </div>

                <input type="text" id="title" name="title" placeholder="글제목" className="full-width" />
                <textarea id="message" name="message" placeholder="하고 싶은 말" rows="4" className="full-width"></textarea>

                {/* QR 코드 */}
                <div className="qr-container">
                    <div className="qr-box">
                        <label>이력서</label>
                        <img src={qrCode1} alt="이력서 QR Code" />
                    </div>
                    <div className="qr-box">
                        <label>연락처</label>
                        <img src={qrCode2} alt="연락처 QR Code" />
                    </div>
                </div>
            </div>
        </div>
    );
}
