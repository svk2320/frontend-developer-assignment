import React from 'react';
import styles from '../../pages/Home.module.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <>
    <div className={styles.homeChild}>
        <div className={styles.topBarWrapper}>
            <div className={styles.topBarChild} />
            <div className={styles.topBarInner}>
              <div className={styles.frameParent}>
                <a>
                  <div className={styles.instanceGroup}>
                    <div className={styles.groupFrame}>
                      <div className={styles.groupDiv}>
                        <div className={styles.title6}>Home</div>
                        <div className={styles.groupItem} />
                      </div>
                    </div>
                  </div>
                </a>
                <a href='#offerings'>
                  <div className={styles.instanceContainer}>
                    <div className={styles.groupWrapper1}>
                      <div className={styles.titleParent7}>
                        <div className={styles.title11}>Our Offerings</div>
                        <div className={styles.groupInner} />
                      </div>
                    </div>
                  </div>
                </a>
                <a href='#team'>
                  <div className={styles.instanceParent1}>
                    <div className={styles.groupWrapper2}>
                      <div className={styles.groupDiv}>
                        <div className={styles.title16}>Our Team</div>
                        <div className={styles.groupChild1} />
                      </div>
                    </div>
                  </div>
                </a>
                <a href='#contact-us'>
                  <div className={styles.instanceParent1}>
                    <div className={styles.groupWrapper2}>
                      <div className={styles.groupDiv}>
                        <div className={styles.title21}>Contact Us</div>
                        <div className={styles.groupChild1} />
                      </div>
                    </div>
                  </div>
                </a>
                <a href='#blogs'>
                  <div className={styles.frameContainer}>
                    <div className={styles.instanceParent3}>
                      <div className={styles.groupWrapper2}>
                        <div className={styles.titleParent22}>
                          <div className={styles.title26}>Blogs</div>
                          <div className={styles.groupChild3} />
                        </div>
                      </div>
                    </div>
                  </div> 
                </a>
              </div>
            </div>
            <button className={styles.registerNowWrapper}>
              <div className={styles.contactNow}>Register Now</div>
            </button>
            <Link to='/'>
              <img className={styles.topBarItem} alt="" src="/group-36901.svg" />
            </Link>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Go back to my profile</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar