import Client from '../../../utility/connection'

export default async function StoredFile(req,res){
    const body = JSON.parse(req.body);
    const token = body.token;
    await Client.connect();
    const db = Client.db('test')
    const userCollection = db.collection('documents');
    const so = await userCollection.find({token:token}).toArray();
    console.log(so);
    res.status(200).send({'files':so});
}