import { NextApiRequest, NextApiResponse } from "next";
import { getFirebaseAdmin, verifyIdToken } from "next-firebase-auth";

import { getCvById } from "utils/api/jobs";

const allowedMethods = ["GET", "PATCH", "DELETE"];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (!allowedMethods.includes(req.method || "")) {
		res.status(401).json({
			message: `Method '${req.method}' is not enabled on this route.`,
		});
		return;
	}

	const { id } = req.query;
	if (typeof id !== "string") {
		res.status(400);
		return;
	}

	if (req.method === "GET") {
		const { code, success, data } = await getCvById(id);

		res.status(code).json({
			success,
			data,
		});
		return;
	}

	if (req.method === "PATCH") {
		const dbAdmin = getFirebaseAdmin().firestore();
		const authAdmin = getFirebaseAdmin().auth();

		const token = req.headers.authorization;

		if (!token) {
			res.status(401);
			return;
		}

		authAdmin
			.verifyIdToken(token)
			.then(decodedToken => {
				if (decodedToken.admin) {
					dbAdmin.doc(`jobs/${id}`).update({
						verified: true,
					});

					res.status(200).json({
						message: `Updated ${id}.`,
					});
					return;
				}

				res.status(401);
				return;
			})
			.catch(err => {
				console.warn(err);

				res.status(500);
				return;
			});
	}

	if (req.method === "DELETE") {
		const dbAdmin = getFirebaseAdmin().firestore();
		const authAdmin = getFirebaseAdmin().auth();

		const token = req.headers.authorization;

		if (!token) {
			res.status(401);
			return;
		}

		authAdmin
			.verifyIdToken(token)
			.then(decodedToken => {
				if (decodedToken.admin) {
					dbAdmin.doc(`jobs/${id}`).delete();

					res.status(200).json({
						message: `Deleted ${id}.`,
					});
					return;
				}

				res.status(401);
				return;
			})
			.catch(err => {
				console.warn(err);

				res.status(500);
				return;
			});
	}
};

export default handler;
