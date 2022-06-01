import { hashPassword } from "../../../lib/auth";
import dbConnect from "../../../lib/db";

const handler = async (req, res) => {
	if (req.method !== "POST") {
		res.status(500).json({ message: "Method not allowed" });
		return;
	}

	const { email, password } = req.body;

	if (
		!email ||
		!email.includes("@") ||
		!password ||
		!password.trim().length < 8
	) {
		res.status(422).json({
			message: "Invalid data",
		});
		return;
	}

	const client = await dbConnect();
	const db = client.db();

	const existingUser = await db.collection("users").findOne({ email });

	if (existingUser) {
		res.status(422).json({
			message: "User already exists",
		});
		client.close();
		return;
	}

	const hashedPassword = await hashPassword(password);

	const result = await db.collection("users").insertOne({
		email,
		password: hashedPassword,
	});

	res.status(201).json({ message: "User created" });
	client.close();
};

export default handler;
