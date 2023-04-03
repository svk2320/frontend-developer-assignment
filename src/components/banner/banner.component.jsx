import React from "react";

import styles from '../../pages/Home.module.css';

const Banner = () => {
  return (
    <>
      <div className={styles.homeInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <img className={styles.frameChild} alt="" src="/group-36931.svg" />
            <div className={styles.groupWrapper}>
              <div className={styles.makingYourRealEstatePurchaWrapper}>
                <div className={styles.makingYourRealContainer}>
                  <span>{`Making your `}</span>
                  <b className={styles.realEstate}>real estate</b>
                  <span> purchase journey faster and transparent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.image27Wrapper}>
          <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
        </div>
        <div className={styles.whoWeAreParent}>
          <div className={styles.whoWeAre}>Who We Are</div>
          <div className={styles.theIndianReal}>
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </div>
          <div className={styles.contactNowParent}>
            <div className={styles.contactNow}>Contact Now</div>
            <img className={styles.frameItem} alt="" src="/group-3321.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
