import styles from './JoinMovement.module.css';

import im1 from '../../assets/Movement/img1.png';
import im2 from '../../assets/Movement/img5.png';
import im3 from '../../assets/Movement/img2.png';
import im4 from '../../assets/Movement/img3.png';
import im5 from '../../assets/Movement/img4.png';
import im1F from '../../assets/Movement/im1F.png';
import im2F from '../../assets/Movement/im5F.png';
import im3F from '../../assets/Movement/im2F.png';
import im4F from '../../assets/Movement/im3F.png';
import im5F from '../../assets/Movement/im4F.png';
import Button from '../../Components/button.jsx';
import Icon1 from '../../assets/Icon/mo1.png';
import Icon2 from '../../assets/Icon/mo2.png';
import Icon3 from '../../assets/Icon/mo3.png';
import Icon4 from '../../assets/Icon/mo4.png';

const JoinTheMovement = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Join The Movement</h2>
        <p>Be More Than a Spectator. Be Part of the Change</p>
        <span>You can participate as:</span>
      </div>

      <div className={styles.grid}>

        <div className={styles.mingrid}>
        <div className={styles.card}>
          <div className={`${styles.content} ${styles.cont1}`}>
            <p className={styles.label}>Join as a</p>
            <h3 className={styles.title}>Player</h3>
            <p className={styles.text}>Compete in events and represent your community</p>
            <Button className={styles.button} text="Join as a Player"/>
          </div>
            <picture className={styles.img1}>
              <source media="(min-width: 1250px)" srcSet={im1} />
              <img src={im1F} alt="Flowers" />
            </picture>
        </div>

        <div className={styles.card}>
          <div className={`${styles.content} ${styles.cont2}`}>
            <p className={styles.label}>Join as a </p>
            <h3 className={styles.title}>Content Creator</h3>
            <p className={styles.text}>Capture and share stories from the field</p>
            <Button className={styles.button} text="Join as a Content Creator"/>
          </div>
          <picture className={`${styles.img1} ${styles.im1}`}>
              <source media="(min-width: 1250px)" srcSet={im3} />
              <img src={im3F} alt="Flowers" />
            </picture>
        </div>
        </div>


        <div className={`${styles.card} ${styles.topImage}`}>
          <div className={styles.content}>
            <p className={styles.label}>Join as a</p>
            <h3 className={styles.title}>Organiser</h3>
            <p className={styles.text}>Host local events under the BOS banner</p>
            <Button className={styles.button} text="Join as a Organiser"/>
          </div>
          <picture className={styles.im2}>
              <source media="(min-width: 1250px)" srcSet={im2} />
              <img src={im2F} alt="Flowers" />
            </picture>
        </div>


        <div className={styles.card}>
          <div className={`${styles.content} ${styles.cont4}`}>
            <p className={styles.label}>Join as a </p>
            <h3 className={styles.title}>Volunteer</h3>
            <p className={styles.text}>Help us organize and execute BOS meets</p>
            <Button className={styles.button} text="Join as a Volunteer"/>
          </div>
          <picture className={styles.im3}>
              <source media="(min-width: 1250px)" srcSet={im4} />
              <img src={im4F} alt="Flowers" />
            </picture>
        </div>

        <div className={styles.card}>
          <div className={`${styles.content} ${styles.cont5}`}>
            <p className={styles.label}>Join as a </p>
            <h3 className={styles.title}>Supporter</h3>
            <p className={styles.text}>Spread the message and help grow the movement</p>
            <Button className={styles.button} text="Join as a Supporter"/>
          </div>
          <picture className={styles.im3}>
              <source media="(min-width: 1250px)" srcSet={im5} />
              <img src={im5F} alt="Flowers" />
            </picture>
        </div>
      </div>


      <div className={styles.container}>
      <h2>What You Get</h2>
      <div className={styles.Iconcards}>
        
      <div className={styles.Iconcard}>
        <img src={Icon1} alt="Certificate Icon"/>
        <p>Participation Certificate</p>
      </div>
      <div className={styles.Iconcard}>
        <img src={Icon2} alt="BOS Kit Icon"/>
        <p>Free BOS Kit</p>
        <p> (for select roles)</p>
      </div>
      <div className={styles.Iconcard}>
        <img src={Icon3} alt="Recognition Icon"/>
        <p>Recognition across</p>
        <p> BOS media</p>
      </div>
      <div className={styles.Iconcard}>
        <img src={Icon4} alt="Network Icon"/>
        <p>Access to the</p>
        <p> HSWF.Network</p>
      </div>
     </div>
    </div>

    </section>
  );
};

export default JoinTheMovement;
