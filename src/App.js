import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authi from "./authi";  // Component with Login/Signup
import Home from "./Home";    // Home page after login/signup
import { auth } from "./firebase";  // Firebase auth

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Check if user is already stored in sessionStorage on initial load
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    console.log("Stored User:", storedUser);  // Debugging stored user data

    if (storedUser) {
      setUser(storedUser);
    }

    // Listen to auth state changes (in case the user logs in or logs out)
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log("Auth State Changed:", currentUser); // Debugging auth state change

      setUser(currentUser);
      setLoading(false);  // Set loading to false after checking auth state

      if (currentUser) {
        // Store the user data in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        // Remove user data from sessionStorage if logged out
        sessionStorage.removeItem('user');
      }
    });

    // Clean up listener
    return () => unsubscribe();
  }, []);

  // If still loading, show a loading screen or a simple message
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* If no user and loading is complete, show Authi (login/signup) */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Authi />} />

        {/* If user is logged in, show Home */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
