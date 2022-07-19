import style from "../styles/components/Titlebar.module.css";
import Image from "next/image";
import siteLogo from "../public/coding_logo.svg";
import searchLogo from "../public/icons/searchLogo.svg";
import bellLogo from "../public/icons/bellLogo.svg";

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <Image src={siteLogo} alt="site main logo"></Image>
        <p> Growth Up ( coding Platform ) </p>{" "}
      </div>
      <div className={style.subcontainer2}>
        <Image src={searchLogo} alt="site main logo"></Image>
        <Image src={bellLogo} alt="site main logo"></Image>
        <p> Robin (userName) </p>{" "}
      </div>
    </div>
  );
}

export default MyApp;
