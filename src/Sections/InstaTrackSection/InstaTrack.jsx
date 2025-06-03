import styles from './InstaFastTrack.module.css';
import videoData from './videoData.js'; 
import logo from '../../assets/Icon/InstaIcon.png';

const placeholderVideos = Array(6).fill('https://via.placeholder.com/180x320.png?text=9:16+Video');

const InstaFastTrack = () => {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div>
          <h2 className={styles.h2}>BOS Insta Fast Track</h2>
          <p className={styles.subtitle}>Quick Glimpses. Real Stories. Pure Passion.</p>
        </div>
        <div className={styles.description}>
          <p>
            Catch bite-sized moments of joy, grit, and heritage from kabaddi dives to victory dances. 
            Fast fun and full of heart watch and share the spirit of BOS anytime anywhere.
          </p>
          <button className={styles.followBtn}>
            <img src={logo} alt="Instagram" /> Follow Us
          </button>
        </div>
      </div>

      <div className={styles.videoScroller}>
        {videoData.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <video 
              controls 
              src={video.url} 
              className={styles.video} 
              width="180" 
              height="320"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstaFastTrack;
