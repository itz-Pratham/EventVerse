import React from "react";
import "../css/section3.css";
const events = [
  {
    title: "Mehfil-Khanaa",
    image: "/assets/img/home/Mehfil-Khanaa.png",
  },
  {
    title: "Dayaar-e-Izhaar",
    image: "/assets/img/home/Dayaar-e-Izhaar.png",
  },
  {
    title: "Bazm-e-Sukhan",
    image: "/assets/img/home/Bazm-e-Sukhan.png",
  },
  {
    title: "Aiwan-e-Zaiq",
    image: "/assets/img/home/Aiwan-e-Zaiq.png",
  },
  {
    title: "Rekhta Books Bazaar",
    image: "/assets/img/home/Rekhta-Books-Bazaar.png",
  },
  {
    title: "Rekhta Bazaar",
    image: "/assets/img/home/Rekhta-Bazaar.png",
  },
  {
    title: "Rekhta Pavillion",
    image: "/assets/img/home/Rekhta-Pavillion.png",
  },
];

const Section3 = () => {
  return (
    <section className="jerWhattoExpectSec jerWrapper clearfix p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="wtexpectCard bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="wtexpectCardInfo p-4">
                <h4 className="text-lg font-semibold">Huma Khalil</h4>
                <span className="text-gray-600">Trustee & Creative Director - Rekhta Foundation</span>
                <p className="text-gray-700 mt-2">She is also an accomplished author and director, and wears numerous feathers in her cap.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
