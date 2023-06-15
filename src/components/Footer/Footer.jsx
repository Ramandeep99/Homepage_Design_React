import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p className="footerText">
        The content is for information purposes only and does not constitute an
        offer to avail any service. Prices mentioned are subject to change
        without notice and properties mentioned are subject to availability.
        Images for representation purposes only. All Rights Reserved.
      </p>
      <div>
        <img alt="img" className="salesImg" src="https://www.prestigegroupkeys.in/images/logo/logo.png" />
      </div>
    </div>
  );
};

export default Footer;