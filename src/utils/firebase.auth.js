import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
		apiKey: "AIzaSyB5xuQapPeVLLWDsZHh4vUvUGDVZOc0RAk",
		authDomain: "clothing-4cbea.firebaseapp.com",
		projectId: "clothing-4cbea",
		storageBucket: "clothing-4cbea.appspot.com",
		messagingSenderId: "809986186744",
		appId: "1:809986186744:web:f99763f3c8d49156ea0a0d",
	},
	firebaseApp = initializeApp(firebaseConfig),
	provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth(),
	signInWithGooglePopup = () => signInWithPopup(auth, provider),
	signInGoogleWithRedirect = () => signInWithRedirect(auth, provider),
	createUserEmailAndPwd = async (email, pwd) => {
		if (!email || !pwd) return;
		return await createUserWithEmailAndPassword(auth, email, pwd);
	};

export const db = getFirestore(),
	createUserDocFromAuth = async userAuth => {
		const userDocRef = doc(db, "users", userAuth.uid),
			userSnapshot = await getDoc(userDocRef),
			{ email, uid, displayName } = userAuth;

		if (!userSnapshot.exists()) {
			const createdAt = new Date();
			try {
				await setDoc(userDocRef, {
					displayName,
					email,
					createdAt,
				});
			} catch (err) {
				console.log("error creating the user", err.message);
			}
		}
		return { displayName, email, uid };
	};

export const signIn = async (email, pwd) => {
	if (!email || !pwd) return;
	return await signInWithEmailAndPassword(auth, email, pwd);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback =>
	onAuthStateChanged(auth, callback);

///add collection and documents

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const colRef = collection(db, collectionKey),
		batch = writeBatch(db);

	objectsToAdd.forEach(obj => {
		const docRef = doc(colRef, obj.title.toLowerCase());
		batch.set(docRef, obj);
	});
	await batch.commit();
};
