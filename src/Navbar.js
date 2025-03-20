import React, { useState } from "react";
import "./index.css"; // Import CSS

const Navbbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar Title */}
      <div className="navbar playwrite-it-moderna">
        Jashn-e-Rekhta
        <div className={`menu-container ${menuOpen ? "change" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Menu Items */}
      <div className={`menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="https://jashnerekhta.org/download-pass">Download Your Pass</a></li>
          <li><a href="https://jashnerekhta.org/rekhta-food-festival">Rekhta Food Festival</a></li>
          <li><a href="https://jashnerekhta.org/rekhta-books-bazaar">Rekhta Books Bazaar</a></li>
          <li><a href="https://jashnerekhta.org/rekhta-bazaar">Rekhta Bazaar</a></li>
          <li><a href="/partners-supporters">Partners & Supporters</a></li>
          <li><a href="/visitorsguide">Complete Visitor’s Guide</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbbar;
