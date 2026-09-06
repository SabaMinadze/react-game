"use client"
import Cube from "./components/Cube/Cube";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <h1>Hello Next.js</h1>
    </div>
    <Cube/>
    <p>For test Branch</p>
    </>
  );
}
