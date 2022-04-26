import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

//css
import "../styles/Works.css";

//assets
import Emoji from "../assets/svg/worksem.svg";
import Yoda from "../assets/svg/works/yoda.svg";
import YodaMerchant from "../assets/svg/works/yodaMerchant.svg";
import Podroom from "../assets/svg/works/podroom.svg";
import Aktuarial from "../assets/svg/works/aktuarial.svg";
import Aktuarialm from "../assets/svg/works/aktuarial-m.svg";
import PodroomM from "../assets/svg/works/podroom-m.svg";
import Quika from "../assets/svg/works/quika.svg";
import Quikam from "../assets/svg/works/quika-m.svg";
import SharedWallet from "../assets/bank.png";

const Works = () => {
  useEffect(() => {
    gsap.from(emoji, {
      scrollTrigger: {
        trigger: emoji,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 1.7,
      duration: 0.8,
    });
  });

  let emoji = useRef(" ");

  return (
    <>
      <section className="works">
        <div id="works" className="works-content">
          <div className="section-top">
            <h1 className="sm-Titles">My Works.</h1>
            <img
              ref={(el) => {
                emoji = el;
              }}
              className="emojiImg0"
              src={Emoji}
              alt="yo"
            />
          </div>
          <div className="works-container">
            <div className="works-rows">
              <div className="works-single">
                <a
                  href="https://play.google.com/store/apps/details?id=com.podroomlive.podroom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      src={Podroom}
                      alt="rnm"
                    />
                    <img className="workimg-m" src={PodroomM} alt="rnm" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>EXPO, CONTEXT-API</p>
                </div>
              </div>
              <div className="works-single2">
                <a
                  href="https://aktuarial.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      src={Aktuarial}
                      alt="aktuarial"
                    />
                    <img
                      className="workimg-m"
                      src={Aktuarialm}
                      alt="aktuarial-m"
                    />
                  </div>
                </a>
                <div
                  style={{ backgroundColor: "black" }}
                  className="works-bottom"
                >
                  <p>REACTJS, NODEJS, KAFKA, DOCKER, POSTGRES</p>
                </div>
              </div>
            </div>

            <div className="works-rows">
              <div className="works-single">
                <a href="https://quika.io/" target="_blank" rel="noreferrer">
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      src={Quika}
                      alt="Quika"
                    />
                    <img className="workimg-m" src={Quikam} alt="Quika" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>REACTJS, REDUX, TYPESCRIPT.</p>
                </div>
              </div>
              <div className="works-single2">
                <a
                  href="https://6265b5f024f612773d98a312--nimble-jelly-d1c323.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      style={{ width: 500, height: 300 }}
                      src={SharedWallet}
                      alt="aktuarial"
                    />
                    <img
                      className="workimg-m"
                      src={SharedWallet}
                      style={{ width: 500, height: 300 }}
                      alt="aktuarial-m"
                    />
                  </div>
                </a>
                <div
                  style={{ backgroundColor: "black" }}
                  className="works-bottom"
                >
                  <p>REACTJS, SOLIDITY, ETHERJS</p>
                </div>
              </div>
            </div>

            <div className="works-rows">
              <div className="works-single">
                <a
                  href="https://play.google.com/store/apps/details?id=com.teamgrace.yoda"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      src={Yoda}
                      alt="jupita"
                    />
                    <img className="workimg-m" src={Yoda} alt="Yoda" />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>REACT-NATIVE, REDUX</p>
                </div>
              </div>
              <div className="works-single2">
                <a
                  href="https://a-pms.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="works-box">
                    <img
                      className="workimg hvr-shrink"
                      src={YodaMerchant}
                      alt="pms"
                    />
                    <img
                      className="workimg-m"
                      src={YodaMerchant}
                      alt="Yoda-Merchant"
                    />
                  </div>
                </a>
                <div className="works-bottom">
                  <p>REACT-NATIVE, REDUX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
