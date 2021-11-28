import React, { useEffect, useRef } from 'react'
import { gsap, Power3 } from 'gsap'

//css
import '../styles/Intro.css'

const Intro = () => {
  useEffect(() => {
    // gsap.from(emoji, {
    //   scrollTrigger: {
    //     trigger: emoji,
    //     start: 'top center+=100',
    //     toggleActions: 'play none none reverse',
    //   },
    //   opacity: 0,
    //   scale: 1.7,
    //   duration: 0.8,
    // })

    const tReveal = gsap.timeline()

    tReveal.from(intro, {
      opacity: -2,
      //duration: 2,
      //y: 200,
      skewX: 25,
      y: '0%',
      duration: 1,
      stagger: 0.25,
      ease: Power3.out,
    })

    tReveal.from(textIntro, {
      opacity: -2,
      //duration: 2,
      //y: 200,
      skewX: 25,
      ease: Power3.out,
      y: '-100%',
      duration: 1,
    })

    tReveal.from(sliderIntro, {
      opacity: -2,
      //duration: 2,
      //y: 200,
      //skewX: 25,
      ease: Power3.out,
      y: '-100%',
      duration: 1.5,
      delay: 0.5,
    })

    // tl.to('.intro', {y: '-100%', duration: 1}, "-=1");
    // tl.fromTo('nav', {opacity : 0}, {opacity: 1, duration: 1});
  })

  let { intro, textIntro, sliderIntro } = useRef('')

  return (
    <div>
      <div className="overlay-intro"></div>
      <div
        className="intro"
        ref={(el) => {
          intro = el
        }}
      >
        <div className="intro-text">
          <h1 className="hide-intro">
            <span
              className="text-intro"
              ref={(el) => {
                textIntro = el
              }}
            >
              Creative Innovations
            </span>
          </h1>
          <h1 className="hide-intro">
            <span className="text-intro">For Everyday</span>
          </h1>
          <h1 className="hide-intro">
            <span className="text-intro">People.</span>
          </h1>
        </div>
      </div>
      <div
        className="slider-intro"
        ref={(el) => {
          sliderIntro = el
        }}
      ></div>
    </div>
  )
}

export default Intro
