import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>benpritchard.tech</title>
        <link rel="icon" href="img/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          charSet="UTF-8"
        />
      </Head>
      <main className={styles.main}>
        <div id="nav-bar" className={styles.navbar}>
          <a href="#" id="name">
            Ben Pritchard
          </a>
          <span id="toRight">
            <a href="####">About Me</a>
            <a href="###">Education</a>
            <a href="##">Contact</a>
          </span>
          <a href="javascript:void(0);" className="icon">
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <section className="main">
          <div className="bg-one">
            <img
              className="pic-of-me"
              src="img/profilepic.png"
              alt="Picture of me"
            ></img>
          </div>

          <div className="bg-two">
            <div className="container">
              <h2>About Me</h2>
              <p>
                I am a Computer Science Student at Loughborough university with
                experience using Python, HTML, CSS, JavaScript, PHP, Java, C#,
                Haskell, Bash and more.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
