import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "@supakrit/shared";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      test
      <Button color="blue" />
    </div>
  );
};

export default Home;
