import React from "react";
import "../css/section5.css"; 




const Section5 = () => {
  return (
    <section className="jerContactusSec jerWrapper">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="jercontactInfo">
          <ul>
            <li>
              <span>Festival Queries</span>
              <a href="mailto:pass@jashnerekhta.org">pass@jashnerekhta.org</a>
            </li>
            <li>
              <span>Collaborations</span>
              <a href="mailto:collaborate@rekhta.org">collaborate@rekhta.org</a>
            </li>
            <li>
              <span>Download Your Pass</span>
              <a href="/download-pass">Click here</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};



// const Section5 = () => {
//   return (
//     <section className="jerContactusSec jerWrapper">
//       <div className="container">
//         <h2>Contact Us</h2>
//         <div className="jercontactInfo">
//           <ul>
//             <li>
//               <span>Festival Queries</span>
//               <a href="mailto:pass@jashnerekhta.org">pass@jashnerekhta.org</a>
//             </li>
//             <li>
//               <span>Collaborations</span>
//               <a href="mailto:collaborate@rekhta.org">collaborate@rekhta.org</a>
//             </li>
//             <li>
//               <span>Download Your Pass</span>
//               <a href="/download-pass">Click here</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Section5;
