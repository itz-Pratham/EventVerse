import React from "react";
import "../css/footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="container">
        <div className="footerContFlex">
          {/* Event Info */}
          <div className="footerInner">
            <h3>Jashn-e-Rekhta 2024</h3>
            <p>13-14-15 December 2024<br />JLN Stadium, Gate No. 1, New Delhi</p>
          </div>

          {/* Quick Links */}
          <div className="footerInner">
            <h3>Quick Links</h3>
            <ul className="footerQuickLinks">
              <li><a href="/schedule">Schedule</a></li>
              <li><a href="/get-tickets">Get Tickets</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="https://jashnerekhta.org/rekhta-food-festival">Rekhta Food Festival</a></li>
              <li><a href="https://jashnerekhta.org/rekhta-books-bazaar">Rekhta Books Bazaar</a></li>
              <li><a href="https://jashnerekhta.org/rekhta-bazaar">Rekhta Bazaar</a></li>
              <li><a href="/partners-supporters">Partners & Supporters</a></li>
              <li><a href="/visitorsguide">Complete Visitor’s Guide</a></li>
              <li><a href="https://jashnerekhta.ae/" target="_blank" rel="noopener noreferrer">JER DUBAI</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footerInner">
            <h3>Follow Us</h3>
            <ul className="footerSocialLinks">
              <li><a href="https://www.instagram.com/jashnerekhtaofficial/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/JashneRekhta/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/JashneRekhta" target="_blank" rel="noopener noreferrer">X</a></li>
              <li><a href="https://www.youtube.com/jashnerekhtaofficial" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Celebrating Urdu */}
        <div className="celebratingUrduFooterTxt">
          <img 
            alt="celebrating_urdu" 
            loading="lazy" 
            className="successIconNotify" 
            src="/assets/img/home/celebrating_urdu.svg" 
          />
        </div>

        {/* Copyright & Bottom Links */}
        <div className="footerCopyRightSection">
          <div className="copyrightText">
            <p>JASHN-E-REKHTA © 2024 ALL RIGHTS RESERVED</p>
          </div>
          <div className="bottomFooterLinks">
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service/">Disclaimer</a></li>
              <li><a href="https://rekhta.org/cms/copyright" target="_blank" rel="noopener noreferrer">Copyright</a></li>
              <li><a href="https://rekhtafoundation.org/" target="_blank" rel="noopener noreferrer">REKHTAFOUNDATION.ORG</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
