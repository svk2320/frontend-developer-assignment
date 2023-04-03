import React from "react";
import styles from "../../pages/Home.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.frameParent20}>
        <div className={styles.groupWrapper8}>
          <div className={styles.frameParent21}>
            <div className={styles.groupChild7} />
            <div className={styles.frameParent22}>
              <div className={styles.frameWrapper29}>
                <div className={styles.frameParent23}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.phlinkedinLogoIcon}
                      alt=""
                      src="/phlinkedinlogo.svg"
                    />
                    <div className={styles.contactNow}>LinkedIn</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector3.svg"
                    />
                    <div className={styles.contactNow}>Facebook</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon7}
                      alt=""
                      src="/vector4.svg"
                    />
                    <div className={styles.contactNow}>Twitter</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector5.svg"
                    />
                    <div className={styles.contactNow}>Instagram</div>
                  </div>
                </div>
              </div>
              <div className={styles.copyright2023Designed}>
                Copyright 2023. Designed by INRE Global
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent24}>
          <div className={styles.frameWrapper30}>
            <div className={styles.wrapper}>
              <div className={styles.div3}>
                <div className={styles.div4}>
                  <img className={styles.child} alt="" src="/group-4907.svg" />
                  <div className={styles.inner}>
                    <div className={styles.inreParent}>
                      <div className={styles.inre}>INRE</div>
                      <div className={styles.lineGroup}>
                        <div className={styles.lineDiv} />
                        <div className={styles.innovationInRealty}>
                          INNOVATION IN REALTY
                        </div>
                        <div className={styles.lineDiv} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper31}>
            <div className={styles.companyParent}>
              <b className={styles.company}>Company</b>
              <div className={styles.ourOfferings}>Home</div>
              <div className={styles.ourOfferings}>Our Offerings</div>
              <div className={styles.ourOfferings}>Our Team</div>
              <div className={styles.ourOfferings}>Contact Us</div>
            </div>
          </div>
          <div className={styles.usefulLinkParent}>
            <b className={styles.company}>Useful Link</b>
            <div className={styles.ourOfferings}>Blogs</div>
            <div className={styles.ourOfferings}>FAQ’s</div>
          </div>
          <div className={styles.frameParent25}>
            <div className={styles.groupParent8}>
              <img
                className={styles.frameChild14}
                alt=""
                src="/group-3337.svg"
              />
              <div className={styles.phoneParent}>
                <b className={styles.ourOfferings}>Phone:</b>
                <div className={styles.supportinreglobalcom}>
                  +91 | 7019305889
                </div>
              </div>
            </div>
            <div className={styles.vectorParent7}>
              <img className={styles.vectorIcon9} alt="" src="/vector6.svg" />
              <div className={styles.phoneParent}>
                <b className={styles.ourOfferings}>Email:</b>
                <div className={styles.supportinreglobalcom}>
                  support@inreglobal.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.frameParent20}>
        <div className={styles.groupWrapper8}>
          <div className={styles.frameParent21}>
            <div className={styles.groupChild7} />
            <div className={styles.frameParent22}>
              <div className={styles.frameWrapper29}>
                <div className={styles.frameParent23}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.phlinkedinLogoIcon}
                      alt=""
                      src="/phlinkedinlogo.svg"
                    />
                    <div className={styles.contactNow}>LinkedIn</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector3.svg"
                    />
                    <div className={styles.contactNow}>Facebook</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon7}
                      alt=""
                      src="/vector4.svg"
                    />
                    <div className={styles.contactNow}>Twitter</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector5.svg"
                    />
                    <div className={styles.contactNow}>Instagram</div>
                  </div>
                </div>
              </div>
              <div className={styles.copyright2023Designed}>
                Copyright 2023. Designed by INRE Global
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent24}>
          <div className={styles.frameWrapper30}>
            <Link to="/">
              <div className={styles.wrapper}>
                <div className={styles.div3}>
                  <div className={styles.div4}>
                    <img
                      className={styles.child}
                      alt=""
                      src="/group-4907.svg"
                    />
                    +
                    <div className={styles.inner}>
                      <div className={styles.inreParent}>
                        <div className={styles.inre}>INRE</div>
                        <div className={styles.lineGroup}>
                          <div className={styles.lineDiv} />
                          <div className={styles.innovationInRealty}>
                            INNOVATION IN REALTY
                          </div>
                          <div className={styles.lineDiv} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.frameWrapper31}>
            <div className={styles.companyParent}>
              <b className={styles.company}>Company</b>
              <Link to="/">
                <div className={styles.ourOfferings}>Home</div>
              </Link>
              <div className={styles.ourOfferings}>
                <a href="#offerings">Our Offerings</a>
              </div>
              <div className={styles.ourOfferings}>
                <a href="#team">Our Team</a>
              </div>
              <div className={styles.ourOfferings}>
                <a href="#contact-us">Contact Us</a>
              </div>
            </div>
          </div>
          <div className={styles.usefulLinkParent}>
            <b className={styles.company}>Useful Link</b>
            <div className={styles.ourOfferings}>
              <a href="#blogs">Blogs</a>
            </div>
            <div className={styles.ourOfferings}>FAQ’s</div>
          </div>
          <div className={styles.frameParent25}>
            <div className={styles.groupParent8}>
              <img
                className={styles.frameChild14}
                alt=""
                src="/group-3337.svg"
              />
              <div className={styles.phoneParent}>
                <b className={styles.ourOfferings}>Phone:</b>
                <div className={styles.supportinreglobalcom}>
                  +91 | 7019305889
                </div>
              </div>
            </div>
            <div className={styles.vectorParent7}>
              <img className={styles.vectorIcon9} alt="" src="/vector6.svg" />
              <div className={styles.phoneParent}>
                <b className={styles.ourOfferings}>Email:</b>
                <div className={styles.supportinreglobalcom}>
                  support@inreglobal.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
