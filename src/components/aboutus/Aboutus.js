import React, { useState } from "react";
import aboutapi from "./aboutapi";
import './aboutus.css'
import Ourteam from "./Ourteam";

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(aboutapi);
    return (
        
    
      <>
        <div style={{height: "70px", backgroundColor: "#FEBE10"}}></div>
        
        <section className="common-section our-services">
          <div className="container mb-5">
            <div className="row">
              <div className="col-10 col-lg-5 text-center our-service-img">
              <img style={{borderRadius: "20px", marginRight: "15px"}} src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.15752-9/331301161_748489459905736_3562626222911087962_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YbZTb1rQBuEAX9osCi1&_nc_ht=scontent-ord5-1.xx&oh=03_AdQplrtoORkAtLwIM9BfrOb1cTg3BC9_dB-HJ1oay0K8BA&oe=64199FFC" />
              </div>
  
              {/* 1section right side data  */}
              <div className="col-12 col-lg-7 our-services-list">

                <h1 style={{fontWeight:"bold"}}className="main-heading">How to use our Service?</h1>
  
                {aboutData.map((curElem) => {
                  const { id, title, info } = curElem;
                  return (
                    <>
                      <div className="outerbox" key={id}>

                        <div className="innerbox">
                          <h2 style={{color:"#FEBE10"}}>{title}</h2>
                          <p className="">{info}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
  
              </div>
            </div>
          </div>
        </section>
        <div style={{height: "70px", backgroundColor: "#FEBE10"}}></div>
        <Ourteam/>
        <div style={{height: "70px", backgroundColor: "#FEBE10"}}></div>




      </>
    );
  };
  
  export default Aboutus;