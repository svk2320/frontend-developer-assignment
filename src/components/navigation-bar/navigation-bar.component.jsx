import React from 'react';
import styles from '../../pages/Home.module.css';

const NavigationBar = () => {
  return (
    <>
    <div className={styles.homeChild}>
        <div className={styles.topBarWrapper}>
          <div className={styles.topBarWrapper}>
            <div className={styles.topBarChild} />
            <div className={styles.lineParent}>
              <div className={styles.groupChild} />
              <div className={styles.instanceParent}>
                <div className={styles.titleParent}>
                  <b className={styles.title}>Overview</b>
                  <div className={styles.instanceChild} />
                </div>
                <div className={styles.titleGroup}>
                  <div className={styles.title1}>Goal based planning</div>
                  <div className={styles.instanceItem} />
                </div>
                <div className={styles.titleGroup}>
                  <div className={styles.title1}>Privacy Policy</div>
                  <div className={styles.instanceItem} />
                </div>
                <div className={styles.titleGroup}>
                  <div className={styles.title1}>FAQs</div>
                  <div className={styles.instanceItem} />
                </div>
                <div className={styles.titleGroup}>
                  <div className={styles.title1}>Smallcase</div>
                  <div className={styles.instanceItem} />
                </div>
              </div>
            </div>
            <div className={styles.topBarInner}>
              <div className={styles.frameParent}>
                <div className={styles.instanceGroup}>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Explore GoalFi</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.groupFrame}>
                    <div className={styles.groupDiv}>
                      <div className={styles.title6}>Home</div>
                      <div className={styles.groupItem} />
                    </div>
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Privacy Policy</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>FAQs</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Smallcase</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.instanceContainer}>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Explore GoalFi</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.groupWrapper1}>
                    <div className={styles.titleParent7}>
                      <div className={styles.title11}>Our Offerings</div>
                      <div className={styles.groupInner} />
                    </div>
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Privacy Policy</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>FAQs</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Smallcase</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.instanceParent1}>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Explore GoalFi</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.groupWrapper2}>
                    <div className={styles.groupDiv}>
                      <div className={styles.title16}>Our Team</div>
                      <div className={styles.groupChild1} />
                    </div>
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Privacy Policy</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>FAQs</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Smallcase</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.instanceParent1}>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Explore GoalFi</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.groupWrapper2}>
                    <div className={styles.groupDiv}>
                      <div className={styles.title21}>Contact Us</div>
                      <div className={styles.groupChild1} />
                    </div>
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Privacy Policy</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>FAQs</div>
                    <div className={styles.instanceItem} />
                  </div>
                  <div className={styles.titleParent2}>
                    <div className={styles.title1}>Smallcase</div>
                    <div className={styles.instanceItem} />
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.instanceParent3}>
                    <div className={styles.titleParent2}>
                      <div className={styles.title1}>Explore GoalFi</div>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.groupWrapper2}>
                      <div className={styles.titleParent22}>
                        <div className={styles.title26}>Blogs</div>
                        <div className={styles.groupChild3} />
                      </div>
                    </div>
                    <div className={styles.titleParent2}>
                      <div className={styles.title1}>Privacy Policy</div>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.titleParent2}>
                      <div className={styles.title1}>FAQs</div>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.titleParent2}>
                      <div className={styles.title1}>Smallcase</div>
                      <div className={styles.instanceItem} />
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            
            <button className={styles.registerNowWrapper}>
              <div className={styles.contactNow}>Register Now</div>
            </button>
            <img className={styles.topBarItem} alt="" src="/group-36901.svg" />
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Go back to my profile</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar