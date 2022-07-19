import Titlebar from "./titlebar";
import Leftnavbar from "./leftnavbar";
import SocialLink from "./socialLink";
import Profile from "./profile";
import style from "../styles/components/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.mainContainer}>
      <Titlebar />
      <Profile />
      <Leftnavbar />
      <main className={style.layoutcontainer}>{children}</main>
      {/* <SocialLink /> */}
    </div>
  );
}
