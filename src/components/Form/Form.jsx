import React, { useState } from "react";
import { useEffect } from "react";
import "./form.css";

function Form() {
  const [isVisible, setIsVisible] = useState(true);
  const [focus, setFocus] = useState(null);

  const handleFocus = (inputId) => {
    setFocus(inputId);
  };

  const handleBlur = () => {
    setFocus(null);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((isVisible) => !isVisible);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="form_wrapper">
      <h1 style={{marginBottom:'30px', fontWeight:'500'}}>CONTACT FORM</h1>
      <div className="form-container">
        <form className="form3">
          <input
            className={`inputName ${focus === "input1" ? "focused" : ""}`}
            type="text"
            placeholder="Your Name*"
            onFocus={() => handleFocus("input1")}
            onBlur={handleBlur}
            required
          />
          <input
            className={`inputMail ${focus === "input2" ? "focused" : ""}`}
            type="email"
            placeholder="Email ID*"
            onFocus={() => handleFocus("input2")}
            onBlur={handleBlur}
            required
          />
          <select
            className={`inputCode ${focus === "input3" ? "focused" : ""}`}
            onFocus={() => handleFocus("input3")}
            onBlur={handleBlur}
            placeholder="India (+91)"
          >
            <option>Choose Country</option>
            <option>India (+91)</option>
            <option>UAE (+971)</option>
            <option>Qatar (+974)</option>
            <option>UK (+44)</option>
            <option>Kuwait (+965)</option>
            <option>Bahrain (+973)</option>
            <option>Oman (+968)</option>
            <option>Saudi Arabia (+966)</option>
            <option>Singapore (+65)</option>
          </select>
          <input
            className={`inputNumber ${focus === "input4" ? "focused" : ""}`}
            type="number"
            placeholder="Mobile No*"
            onFocus={() => handleFocus("input4")}
            onBlur={handleBlur}
            required
          />
          <select
            className={`inputCity ${focus === "input5" ? "focused" : ""}`}
            onFocus={() => handleFocus("input5")}
            onBlur={handleBlur}
            placeholder="Gurgaon"
          >
            <option>Select City</option>
            <option>Gurgaon</option>
            <option>Noida</option>
            <option>Bangalore</option>
            <option>Lucknow</option>
            <option>Pune</option>
            <option>Thane</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Greater-noida</option>
            <option>Gujarat</option>
            <option>Navi-mumbai</option>
            <option>Faridabad</option>
            <option>East-pune</option>
            <option>Sohna</option>
            <option>West-pune</option>
          </select>
        </form>
        <div className="btn">
          <button>BOOK FREE SITE VISIT</button>
        </div>
        <div className={`textMover ${isVisible ? "isVisible" : ""}`}>
          <img alt="img"
            className="img1"
            src="data:image/png;base64,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"
          />
          <span className="span1">&nbsp;Free Site Visit</span>
        </div>
      </div>
      </div>
    </>
  );
}

export default Form;
