import React from "react";
import Navbbar from "./Navbar";
import Back from "./components/back";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/Section6";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div>
      <Navbbar />
      <Back />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default Home;
