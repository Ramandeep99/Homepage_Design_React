import React, { useState, useEffect } from 'react';
import './modal.css'; // Import the CSS file
import {FaHandshake} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import {CiPercent} from 'react-icons/ci'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearInterval(timer);
  }, []); 

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={handleModalClick}>
            <div className="top-line">
              <p href="#">Register here &amp; Avail the Best Offers!</p>
            </div>
            <div className="icons">
              <div className="icon">
                <FaHandshake className='iconImg'/>
                <p>Free Site Visit</p>
              </div>
              <div className="icon">
                <FiPhoneCall className='iconImg'/>
                <p>Instant Call Back</p>
              </div>
              <div className="icon">
                <CiPercent className='iconImg'/>
                <p>Exclusive Deals</p>
              </div>
            </div>
            <img className='modalImg' src="https://www.prestigeconstructions.com/admin/uploads/projects/prestige-dew-drops/prestige-dew-drops-logo.jpg" alt="Ima" />
            <form className='form1'>
                <input type="text" placeholder="Enter your name" />
           
                <input type="email" placeholder="Enter your email" />
               
                <select>
                  <option value="91">India (+91)</option>
                  <option value="1">+1</option>
                  <option value="61">+61</option>
                  {/* Add more options for other country codes */}
                </select>
                <input type="tel" placeholder="Enter your mobile number" />
              <button className='modalbutton' type="submit">Register</button>
            </form>
            <p className="contact-number">Contact us at: +1-123-456-7890</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
