import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from "uuid";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const firestore = getFirestore();
		const snapshot = await getDocs(query(collection(firestore, "jobs")));

		let docs: CVDoc[] = [];
		snapshot.forEach(doc => {
			const { fullName, title, description, link } = doc.data();

			docs.push({
				id: doc.id,
				fullName,
				title,
				description,
				link,
			});
		});

		res.status(200).json({
			success: true,
			docs,
		});
	}

	if (req.method === "POST") {
		res.status(201).json({
			success: true,
			uuid: uuidv4(),
		});
	}
};

export default handler;
