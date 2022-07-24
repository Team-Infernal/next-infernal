import { unsetAuthCookies } from "next-firebase-auth";
import { NextApiRequest, NextApiResponse } from "next";

import initAuth from "lib/initAuth";
initAuth();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await unsetAuthCookies(req, res);
	} catch (err) {
		return res.status(500).json({ error: "Unexpected error." });
	}
	return res.status(200).json({ success: true });
}

export default handler;