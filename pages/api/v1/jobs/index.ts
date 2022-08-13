import { getFirebaseAdmin } from "next-firebase-auth";
import { NextApiRequest, NextApiResponse } from "next";

import { getCvWhere, getCvById } from "utils/api/jobs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	/**
	 * GET REQUEST
	 */
	if (req.method === "GET") {
		const { id, userId, uploaded, verified } = req.query;

		/**
		 * ID QUERY
		 */
		if (id && typeof id === "string") {
			const { code, success, data } = await getCvById(id);

			return res.status(code).json({
				success,
				data,
			});
		}

		if (userId && typeof userId === "string") {
			const { code, success, data } = await getCvWhere("userId", "==", userId);

			return res.status(code).json({
				success,
				data,
			});
		}

		if (uploaded && typeof uploaded === "string") {
			const { code, success, data } = await getCvWhere(
				"uploaded",
				">=",
				parseInt(uploaded)
			);

			return res.status(code).json({
				success,
				data,
			});
		}

		if (verified && typeof verified === "string") {
			const lookingForVerified = verified !== "0" && verified !== "false";

			const { code, success, data } = await getCvWhere(
				"verified",
				"==",
				lookingForVerified
			);

			return res.status(code).json({
				success,
				data,
			});
		}

		/**
		 * NO QUERY
		 */
		const { code, success, data } = await getCvWhere("verified", "==", true);

		res.status(code).json({
			success,
			data,
		});
	}

	/**
	 * POST REQUEST
	 */
	if (req.method === "POST") {
		const dbAdmin = getFirebaseAdmin().firestore();
		const { body } = req;
		const { userId, fullName, title, description, link } = body;

		const newDoc = {
			userId,
			fullName,
			title,
			description,
			link,
		};

		const { id } = await dbAdmin.collection("jobs").add({
			userId: newDoc.userId,
			fullName: newDoc.fullName,
			title: newDoc.title,
			description: newDoc.description,
			link: newDoc.link,
			verified: false,
			uploaded: Date.now(),
		});

		if (!id) {
			res.status(500).json({
				success: false,
				message: "Document introuvable",
			});

			return;
		}

		const doc = await dbAdmin.collection("jobs").doc(id).get();
		const data = doc.data();

		if (!data) {
			res.status(500).json({
				success: false,
				message: "Document introuvable.",
			});

			return;
		}

		res.status(201).json({
			success: true,
			doc: {
				id,
				...data,
			},
		});

		return;
	}
};

export default handler;
