import style from "../styles/components/Titlebar.module.css";
import Image from "next/image";
import siteLogo from "../public/coding_logo.svg";

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <Image src={siteLogo} alt="site main logo"></Image>
        <p> Growth Up ( coding Platform ) </p>{" "}
      </div>
    </div>
  );
}

export default MyApp;
