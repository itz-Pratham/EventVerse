import React, { useState } from "react";
import Signup from "./singin";
import Login from "./Login";

const Authi = () => {
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Welcome to Event</h2>
      <div>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Sign Up</button>
      </div>
      <div>{showLogin ? <Login /> : <Signup />}</div>
    </div>
  );
};

export default Authi;




// import React, { useState } from "react";
// import Signup from "./signup";
// import Login from "./Login";

// const Authi= () => {
//   const [showLogin, setShowLogin] = useState(false); // Toggle between login & sign-up

//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h2>Welcome to Event</h2>
//       <div>
//         <button onClick={() => setShowLogin(true)}>Login</button>
//         <button onClick={() => setShowLogin(false)}>Sign Up</button>
//       </div>
//       <div>
//         {showLogin ? <Login /> : <Signup />}
//       </div>
//     </div>
//   );
// };

// export default Authi;
