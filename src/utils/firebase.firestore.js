import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const db = getFirestore(),
	createUserDocFromAuth = async (userAuth, additionalInformation) => {
		const userDocRef = doc(db, "users", userAuth.uid),
			userSnapshot = await getDoc(userDocRef);
		if (!userSnapshot.exists()) {
			const { displayName, email } = userAuth,
				createdAt = new Date();
			try {
				await setDoc(userDocRef, {
					displayName,
					email,
					createdAt,
					...additionalInformation,
				});
			} catch (err) {
				console.log("error creating the user", err.message);
			}
		}
		return userDocRef;
	};
