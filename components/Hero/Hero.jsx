import styles from "./Hero.module.css";

const Hero = ({ heading1, heading3, address }) => {
  return (
    <div className={styles.container}>
      <h1>{heading1}</h1>
      <h3>{heading3}</h3>
      <p>{address}</p>
    </div>
  );
};

export default Hero;
