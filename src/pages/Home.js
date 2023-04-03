import Banner from "../components/banner/banner.component";
import NavigationBar from "../components/navigation-bar/navigation-bar.component";
import Offerings from "../components/offerings/offerings.component";
import Members from "../components/members/members.component";
import Blogs from "../components/blogs/blogs.component";
import Footer from "../components/footer/footer.component";
import ContactUs from "../components/contact-us/contact-us.component";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.image29Wrapper}>
        <div className={styles.image29} />
      </div>
      <Banner />
      <NavigationBar />
      <Offerings />
      <Members />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
