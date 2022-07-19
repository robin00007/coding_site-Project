import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../../firebaseConfig";
import { async } from "@firebase/util";
const signoutFromGoogle = () => {
  const auth = getAuth(firebaseApp);
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("singout success");
    })
    .catch((error) => {
      console.log("signout error " + error);
    });
};
export default signoutFromGoogle;
