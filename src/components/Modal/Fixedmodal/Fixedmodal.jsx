import React, { useState } from "react";
import "./fixedmodal.css";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";

const Fixedmodal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="contact-bar">
        <div className="fixedcontact-icon">
          <BiPhoneCall className="contact-icon-icon" />
        </div>
        <div className="fixedcontact-number">+1-123-456-7890</div>
        <div className="toggle-modal" onClick={handleToggleModal}>
          {isOpen ? (
            <IoIosArrowDropdownCircle className="toggle-icon" />
          ) : (
            <IoIosArrowDropupCircle className="toggle-icon" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixedmodal">
          <div className="fixedmodal-content">
            <div className="fixedtop-line">
              <div className="fixedcontact-icon">
                <BiPhoneCall className="contact-icon-icon" />
              </div>
              <div className="fixedcontact-number">+1-123-456-7890</div>
              <IoIosArrowDropdownCircle
                className="toggle-icon"
                onClick={handleClose}
              />
            </div>
            <div className="second-line">
              <p href="#">Contact with us</p>
            </div>

            <form className="form2">
              <input className="form2Inp" type="text" placeholder="Enter your name" />

              <input className="form2Inp" type="email" placeholder="Enter your email" />

              <select className="form2Inp">
                <option value="91">India (+91)</option>
                <option value="1">+1</option>
                <option value="61">+61</option>
              </select>

              <input className="form2Inp" type="tel" placeholder="Enter your mobile number" />

              <input className="form2Inp" type="text" placeholder="Enter your city" />
              <button className="fixedmodalBtn" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Fixedmodal;
