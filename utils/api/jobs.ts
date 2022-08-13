import {
	doc,
	collection,
	query,
	where,
	orderBy,
	getDoc,
	getDocs,
	getFirestore,
	WhereFilterOp,
} from "firebase/firestore";

const db = getFirestore();

export const getAllCv = async () => {
	const docRef = collection(db, "jobs");
	const docSnap = await getDocs(query(docRef, orderBy("uploaded", "asc")));

	let data: CVDoc[] = [];

	docSnap.forEach(doc => {
		const { userId, fullName, title, description, link, uploaded, verified } =
			doc.data();

		data.push({
			id: doc.id,
			userId,
			fullName,
			title,
			description,
			link,
			uploaded,
			verified,
		});
	});

	return {
		code: 200,
		success: true,
		data,
	};
};

export const getCvWhere = async (
	prop: string,
	operator: WhereFilterOp,
	value: string | number | boolean
) => {
	const docRef = collection(db, "jobs");
	const docSnap = await getDocs(query(docRef, where(prop, operator, value)));

	let data: CVDoc[] = [];

	docSnap.forEach(doc => {
		const { userId, fullName, title, description, link, uploaded, verified } =
			doc.data();

		data.push({
			id: doc.id,
			userId,
			fullName,
			title,
			description,
			link,
			uploaded,
			verified,
		});
	});

	return {
		code: 200,
		success: true,
		data,
	};
};

export const getCvById = async (id: string) => {
	const docRef = doc(db, "jobs", id);
	const docSnap = await getDoc(docRef);

	if (!docSnap.exists()) {
		return {
			code: 404,
			success: false,
			data: null,
		};
	}

	return {
		code: 200,
		success: true,
		data: docSnap.data(),
	};
};
