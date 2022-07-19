import styles from "../styles/components/profile.module.css";
import Image from "next/dist/client/image";
import Link from "next/link";
import profileIcon from "../public/icons/profileIcon.png";
import signInWithGoogle from "./authFeature/googleAuth";
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <Link href="/login">
          <Image
            src={profileIcon}
            alt="profile_Icon"
            className={styles.profilePic}
          ></Image>
        </Link>
        <p>Name of the user </p>
        <p>
          <i>@email.email.com</i>
        </p>
      </div>

      <div className={styles.CodingInfo}></div>
    </div>
  );
}

export default MyApp;
