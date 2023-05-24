import { MongoClient,ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://massifcoder:massifcoder@cluster0.olzxy8d.mongodb.net/?retryWrites=true&w=majority";

const Client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

export default Client;