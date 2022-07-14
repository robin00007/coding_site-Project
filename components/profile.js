import styles from "../styles/components/profile.module.css";
import Image from "next/dist/client/image";
import Link from "next/link";
import profileIcon from "../public/icons/profileIcon.png";
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.profileContainer}>
      <Link href="/login">
        <Image src={profileIcon} alt="profile_Icon"></Image>
      </Link>
    </div>
  );
}

export default MyApp;
