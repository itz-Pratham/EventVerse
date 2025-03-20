import React from "react";
import "../css/section4.css";

const events = [
  { id: 1, image: "https://via.placeholder.com/300", title: "Event 1", description: "Details about Event 1" },
  { id: 2, image: "https://via.placeholder.com/300", title: "Event 2", description: "Details about Event 2" },
  { id: 3, image: "https://via.placeholder.com/300", title: "Event 3", description: "Details about Event 3" },
  { id: 4, image: "https://via.placeholder.com/300", title: "Event 4", description: "Details about Event 4" },
  { id: 5, image: "https://via.placeholder.com/300", title: "Event 5", description: "Details about Event 5" },
];

const Section4 = () => {
  return (
    <div className="scroll-container scrollbar-hide">
      {events.map((event) => (
        <div key={event.id} className="card">
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img src={event.image} alt={event.title} />
              <div className="card-content">
                <h3>{event.title}</h3>
              </div>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section4;
