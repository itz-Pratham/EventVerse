import React from "react";
import "../css/section2.css";
import Rightsection from "./rightsection";
import Leftsection from "./leftsection";


const Section2= () =>{
    return (
        <div className="jerAboutFlex">
            {/* <h1>uperdiv</h1> */}
            <Leftsection />
          <Rightsection />
         
        </div>
    )
}

export default Section2;