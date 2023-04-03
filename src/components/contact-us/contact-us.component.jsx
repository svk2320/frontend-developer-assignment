import React from "react";
import styles from "../../pages/Home.module.css";

const ContactUs = () => {
  return (
    <div className={styles.groupParent10} id="contact-us">
      <div className={styles.groupParent11}>
        <div className={styles.groupParent11}>
          <div className={styles.groupChild9} />
          <div className={styles.frameParent33}>
            <div className={styles.getInTouchWithUsToConnecWrapper}>
              <div className={styles.contactNow}>
                Get In Touch With Us To Connect
              </div>
            </div>
            <div className={styles.frameParent34}>
              <div className={styles.contactUsWrapper}>
                <div className={styles.contactUs5}>{`Contact Us `}</div>
              </div>
              <div className={styles.frameParent35}>
                <div className={styles.formInputFieldParent}>
                  <div className={styles.formInputField}>
                    <div className={styles.branchNameWrapper}>
                      <div className={styles.branchName}>Full name</div>
                    </div>
                    <div className={styles.formInputFieldChild} />
                  </div>
                  <div className={styles.formInputField1}>
                    <div className={styles.loremgmailcom}>lorem@gmail.com</div>
                    <div className={styles.emailAddressWrapper}>
                      <div className={styles.branchName}>Email address</div>
                    </div>
                  </div>
                </div>
                <div className={styles.notMoreThan}>
                  Not more than 50 characters
                </div>
                <div className={styles.pleaseEnterA}>
                  Please enter a valid email address
                </div>
              </div>
              <div className={styles.formInputFieldWrapper}>
                <div className={styles.formInputField2}>
                  <div className={styles.countryWrapper}>
                    <div className={styles.branchName}>Country</div>
                  </div>
                  <div className={styles.bangalore}>Bangalore</div>
                  <img
                    className={styles.materialSymbolsarrowDropDoIcon}
                    alt=""
                    src="/materialsymbolsarrowdropdownrounded.svg"
                  />
                </div>
              </div>
              <div className={styles.formInputField3}>
                <div className={styles.stagesWrapper}>
                  <div className={styles.stages}>Stages</div>
                </div>
                <div className={styles.iHaveBooked}>
                  I have booked but registration is not done
                </div>
                <img
                  className={styles.materialSymbolsarrowDropDoIcon}
                  alt=""
                  src="/materialsymbolsarrowdropdownrounded.svg"
                />
              </div>
              <div className={styles.mobileButton}>
                <div className={styles.contactNow}>Submit</div>
              </div>
            </div>
            <img
              className={styles.happyAnnouncementPanaIcon}
              alt=""
              src="/happy-announcementpana@2x.png"
            />
          </div>
        </div>
        <div className={styles.formInputField4}>
          <img
            className={styles.formInputFieldItem}
            alt=""
            src="/group-36873.svg"
          />
          <div className={styles.div9}>+91 9876543210</div>
        </div>
      </div>
      <div className={styles.mobileNumberWrapper}>
        <div className={styles.branchName}>Mobile Number</div>
      </div>
    </div>
  );
};

export default ContactUs;
