
import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";



const Home = () => (
  <div className={styles.homeContainer}>
    <Header />
    <main className={styles.mainContent}>
      <section className={styles.section}>
        <Hero />
      </section>
    
    </main>
    <Footer />
  </div>
);

export default Home;
