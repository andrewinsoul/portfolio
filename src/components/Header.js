import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

//css
import '../styles/Header.css'
import '../styles/Hover.css'
import '../styles/MobileNav.css'

//assets
import Logo from '../assets/svg/logo.svg'
import CMail from '../assets/svg/cmail.svg'
import mhead from '../assets/svg/peace.svg'

const Header = () => {
  const [showMenuList, setshowMenuList] = useState(false)

  return (
    <>
      <header>
        <motion.div className="header-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: -150,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  delay: 1.5,
                  duration: 2,
                },
              },
            }}
            className="header-content"
          >
            <div className="nav-left">
              <Link to="/">
                <img src={Logo} alt="logo" className="logo-main" />
              </Link>
            </div>
            <nav className="nav-right">
              <ul className="nav-links">
                <li className="nav-link  hvr-underline-from-left2">
                  <a href="#works">works</a>
                </li>
                <li className="nav-link hvr-underline-from-left2">
                  <a href="#about">about</a>
                </li>
                <li>
                  <button className="nav-btn">
                    <a href="mailto:andrewinsoul@gmail.com">contact</a>
                  </button>
                </li>
              </ul>
            </nav>

            {/* mobile nav */}
            <nav className="mobile-nav">
              <div className="menu-wrap ">
                <input
                  type="checkbox"
                  className="toggler"
                  onChange={() => setshowMenuList(!showMenuList)}
                />
                <div className="hamburger">
                  <div id="ham-lines"></div>
                </div>
                <div className="menu" id="m-overlay">
                  <div id="m-overlay2">
                    <div className="mbox-two">
                      {showMenuList && (
                        <ul>
                          <motion.li
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                opacity: 0,
                                scale: 0.2,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.2,
                                  duration: 0.4,
                                },
                              },
                            }}
                          >
                            <Link to="/">home</Link>
                          </motion.li>
                          <motion.li
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                opacity: 0,
                                scale: 0.2,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.4,
                                  duration: 0.4,
                                },
                              },
                            }}
                          >
                            <Link to="/2">works</Link>
                          </motion.li>
                          <motion.li
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                opacity: 0,
                                scale: 0.2,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.6,
                                  duration: 0.4,
                                },
                              },
                            }}
                            //onClick={handleHide}
                          >
                            <Link to="/3">about</Link>
                          </motion.li>
                          <motion.li
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                opacity: 0,
                                scale: 0.2,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 0.8,
                                  duration: 0.4,
                                },
                              },
                            }}
                            className="link-item"
                          >
                            <a
                              href="https://www.linkedin.com/in/andrew-okoye-281261132/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              linkedin
                            </a>
                          </motion.li>
                          <motion.li
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: {
                                opacity: 0,
                                scale: 0.2,
                              },
                              visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  delay: 1,
                                  duration: 0.4,
                                },
                              },
                            }}
                          >
                            <a
                              href="https://github.com/andrewinsoul"
                              target="_blank"
                              rel="noreferrer"
                            >
                              github
                            </a>
                          </motion.li>
                        </ul>
                      )}
                    </div>
                    {showMenuList && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {
                            opacity: 0,
                            scale: 0,
                          },
                          visible: {
                            // scale: [0, 1.3, 1],
                            scale: 1,
                            opacity: 1,
                            // x: [40, 0, -40, 0],
                            transition: {
                              delay: 1.1,
                              duration: 0.7,
                            },
                          },
                        }}
                        className="mobileImage"
                      >
                        <motion.img
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: {
                              rotate: 15,
                            },
                            visible: {
                              rotate: [0, 15, -15, 15, -15, 15, -15, 0],
                              transition: {
                                type: 'spring',
                                delay: 1.3,
                                duration: 3.5,
                                //repeat: Infinity,
                              },
                            },
                          }}
                          src={mhead}
                          alt="peace"
                        />
                      </motion.div>
                    )}
                    {showMenuList && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {
                            opacity: 0,
                            // scale: 0,
                          },
                          visible: {
                            // scale: 1,
                            opacity: 1,
                            transition: {
                              delay: 0.3,
                              duration: 1.8,
                            },
                          },
                        }}
                        className="mobileContact"
                      >
                        <a href="mailto:andrewinsoul@gmail.com">
                          <img src={CMail} alt="mail" />
                        </a>
                        <a href="mailto:andrewinsoul@gmail.com">
                          <p>Get in touch</p>
                        </a>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* mobile nav */}
            </nav>
          </motion.div>
        </motion.div>
      </header>
    </>
  )
}

export default Header
