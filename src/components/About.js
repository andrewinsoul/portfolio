import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

//css
import "../styles/About.css";

//assets
import emoji from "../assets/svg/about/emoji1.svg";
import Zen from "../assets/zen2.gif";

import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    gsap.from(emoji2, {
      scrollTrigger: {
        trigger: emoji2,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 1.7,
      duration: 1.8,
    });
  }, []);

  let emoji2 = useRef(" ");
  return (
    <>
      <section className="about">
        <div id="about" className="about-container">
          <div className="about-content">
            <div className="section-top2">
              <h1 className="sm-Titles2">About me</h1>
              <img
                src={emoji}
                alt="yo"
                ref={(el) => {
                  emoji2 = el;
                }}
              />
            </div>
            <div className="about-body">
              <div className="about-left">
                <div className="about-textbox">
                  <p>
                    I'm Andrew Okoye, a full-stack developer with a very strong
                    interest in block-chain technology. Converting ideas into
                    applications that are seamless and intuitive to the end user
                    is what I do. I also pay attention to clean code strategies
                    and methodologies while drafting solutions so that making
                    changes to the codebase will not be a burden. You can find
                    me writing songs, singing, dancing or observing Nature while
                    I am not coding which is why my colleagues have nicknamed
                    me: "NATURE"
                  </p>
                  <p>I’m good at what I do because I love what I do.</p>
                </div>
                <div className="about-textbox">
                  <h2>Core tech / Skills</h2>
                  <p>
                    HTML/CSS/SASS, Javascript [ES6], Reactjs, ReactNative,
                    Redux/Redux toolkit, Nodejs, Postgres, Docker, Mocha, Jest,
                    Solidity, Hardhat, etherjs, Sinon, Express, Python(Tkinter,
                    Flask & Django)
                  </p>
                </div>
                <div className="about-textbox">
                  <h2>Familiar with</h2>
                  <p>WebRTC, Truffle, Web3, Kafka</p>
                </div>
              </div>
              <div className="about-right">
                <img src={Zen} alt="zen" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default About;
