import { useContext } from "react";
import { TestContext } from "../../contexts/testContext";
import styles from "./landing.module.css";

const Landing: React.FC = () => {
  const { test } = useContext(TestContext);
  return (
    <section className={styles.wrapper}>
      <h1>Landing</h1>
      <p>{test}</p>
    </section>
  );
};

export default Landing;
