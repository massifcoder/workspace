import { MongoClient,ServerApiVersion } from "mongodb";
const uri = String(process.env.MONGODB_URI);

const Client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

export default Client;