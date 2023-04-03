import React from "react";
import styles from "../../pages/Home.module.css";

const Offerings = () => {
  return (
    <div className={styles.groupParent1} id="offerings">
      <div className={styles.frameGroup}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.groupParent2}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-178.svg"
                />
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.preBookingWrapper}>
                <div className={styles.preBooking}>Pre-Booking</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.groupParent3}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-1781.svg"
                />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.postBookingPreRegistratioWrapper}>
                <div
                  className={styles.postBookingPreRegistratio}
                >{`Post-Booking & Pre-Registration`}</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.groupParent4}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="/ellipse-1781.svg"
                />
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.postRegistrationWrapper}>
                <div
                  className={styles.postRegistration}
                >{`Post-Registration `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameWrapper5}>
              <div className={styles.ourOfferingsParent}>
                <b className={styles.ourOfferings}>Our Offerings</b>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
          <div className={styles.thisWholePurchaseContainer}>
            <span>{`This whole purchase journey can be divided into three stages. For more details, `}</span>
            <b className={styles.clickHere}>Click Here</b>
          </div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.frameWrapper6}>
          <div className={styles.frameWrapper7}>
            <div className={styles.image27Parent}>
              <img
                className={styles.image27Icon1}
                alt=""
                src="/image-271@2x.png"
              />
              <div className={styles.frameWrapper8}>
                <div className={styles.backgroundVerificationParent}>
                  <div className={styles.backgroundVerification}>
                    Background verification
                  </div>
                  <div className={styles.assuringYourCapital}>
                    Assuring your capital is in safe hands, we provide detailed
                    verification reports of the project and developer. These are
                    customized and detailed...
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.contactUsParent}>
                      <div className={styles.contactNow}>Contact us</div>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-3321.svg"
                      />
                    </div>
                    <div className={styles.inr3000project}>
                      INR 3000/Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper9}>
          <div className={styles.frameWrapper7}>
            <div className={styles.image27Parent}>
              <img
                className={styles.image27Icon1}
                alt=""
                src="/image-272@2x.png"
              />
              <div className={styles.frameWrapper8}>
                <div className={styles.backgroundVerificationParent}>
                  <div className={styles.backgroundVerification}>
                    Virtual site visit
                  </div>
                  <div className={styles.assuringYourCapital}>
                    It becomes imperative to observe your apartment or plot very
                    closely before paying the booking amount. We are here to
                    assist with an AI-enabled UAV...
                  </div>
                  <div className={styles.frameWrapper12}>
                    <div className={styles.contactUsParent}>
                      <div className={styles.contactNow}>Contact us</div>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-3321.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper13}>
          <div className={styles.frameWrapper7}>
            <div className={styles.image27Parent}>
              <img
                className={styles.image27Icon1}
                alt=""
                src="/image-273@2x.png"
              />
              <div className={styles.frameWrapper8}>
                <div className={styles.backgroundVerificationParent}>
                  <div className={styles.backgroundVerification}>
                    Title diligence
                  </div>
                  <div className={styles.dueDiligenceIs}>
                    Due diligence is necessary to prevent real estate
                    malpractices which have contributed to more than 20% of the
                    civil cases in India. We have a panel of...
                  </div>
                  <div className={styles.frameWrapper12}>
                    <div className={styles.contactUsParent}>
                      <div className={styles.contactNow}>Contact us</div>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-3321.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
