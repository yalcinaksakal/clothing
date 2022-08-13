import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB5xuQapPeVLLWDsZHh4vUvUGDVZOc0RAk",
	authDomain: "clothing-4cbea.firebaseapp.com",
	projectId: "clothing-4cbea",
	storageBucket: "clothing-4cbea.appspot.com",
	messagingSenderId: "809986186744",
	appId: "1:809986186744:web:f99763f3c8d49156ea0a0d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = signInWithPopup(auth, provider);
