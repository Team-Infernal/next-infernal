import { MongoClient } from "mongodb";

const dbConnect = async () => {
	const client = await MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return client;
};

export default dbConnect;
