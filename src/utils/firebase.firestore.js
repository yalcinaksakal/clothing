import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const db = getFirestore(),
	createUserDocFromAuth = async userAuth => {
		const userDocRef = doc(db, "users", userAuth.uid),
			userSnapshot = await getDoc(userDocRef);
		if (!userSnapshot.exists()) {
			const { displayName, email } = userAuth,
				createdAt = new Date();
			try {
				await setDoc(userDocRef, { displayName, email, createdAt });
			} catch (err) {
				console.log("error creating the user", err.message);
			}
		}
		return userDocRef;
	};
