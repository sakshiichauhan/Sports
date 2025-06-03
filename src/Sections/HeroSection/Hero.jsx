import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import stadiumImg from '../../assets/HeroBackground.jpg'; 
import Logo from '../../assets/Logo.png';
import Button from '../../Components/button.jsx';
import fitLogo from '../../assets/logos/FIT.jpg';
import nitiLogo from '../../assets/logos/NITI.png';
import { FiMenu, FiX } from 'react-icons/fi';

function Hero () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${stadiumImg})` }}>
      <div className={styles.overlay}>
        <div className={styles.logoNav}>
          <img src={Logo} alt="BOS Logo" className={styles.logo} />

          <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`}>
            {isMenuOpen && (
              <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton}>
                <FiX size={28} />
              </button>
            )}
            <img src={Logo} alt="BOS Logo" className={`${styles.logo} ${styles.inNav}`} />
            <a href="#">ABOUT</a>
            <a href="#">EVENTS</a>
            <a href="#">JOIN AS</a>
            <a href="#">SPONSERS</a>
            <a href="#">PARTNERS</a>
            <a href="#">INSTA TRACK</a>
            <a href="#">HSWF.NETWORK</a>
            <Button className={`${styles.joinBtn} ${styles.inNav}`} text="Join" />
          </nav>

          {!isMenuOpen && (
            <div className={styles.mobileMenuToggle}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton}>
                <FiMenu size={28} />
              </button>
            </div>
          )}

          <div className={styles.joinButtonWrapper}>
            <Button className={`${styles.joinBtn} ${styles.outNav}`} text="Join" />
          </div>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>

        <div className={`${styles.content} ${isMenuOpen ? styles.blurContent : ''}`}>
          <h1>Where Heritage Meets Passion, And Communities Come Together Through Sports</h1>
          <p className={styles.subheading}>
            Bond Over Sports (BOS) is a movement to revive traditional games and unite communities through Sports.
          </p>
          <p className={styles.description}>
            Whether it's kabaddi in the heartlands, kho-kho at school yards, or gully cricket in urban lanes, every game has a story—and we’re here to tell it.
          </p>
          <div className={styles.container}>
            <p className={styles.label}>Registered Under</p>
            <div className={styles.grid}>
              <div className={styles.logoBox}>
                <img src={fitLogo} alt="FIT India" />
              </div>
              <div className={styles.logoBox}>
                <img src={nitiLogo} alt="NITI Aayog" />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button className={styles.primary} text="Join the movement" />
            <div className={styles.secWrapper}>
              <div className={styles.out}></div>
              <button className={styles.secondary}>Explore Events</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
