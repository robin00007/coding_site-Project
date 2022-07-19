import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../../firebaseConfig";
import { async } from "@firebase/util";

const signInWithGoogle = async () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const idToken = credential.idToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user); // we can take username and photo url from here and display name also
        const displayName = user.displayName;
        const photoUrl = user.photoURL;
        console.log(displayName);
        console.log(photoUrl);

        console.log(token);
        console.log(idToken);
        console.log(credential);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // if (errorCode != 0) {
        //   console.log(errorCode);
        // }
        const errorMessage = error.message;
        // if (errorMessage != 0) {
        //   console.log(errorMessage);
        // }
        // The email of the user's account used.
        const email = error.customData.email;
        // if (email != 0) {
        //   console.log(email);
        // }
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  } catch (err) {
    console.log("error message" + err);
  }
};

export default signInWithGoogle;
