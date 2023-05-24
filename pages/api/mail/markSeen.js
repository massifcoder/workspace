import Client from "../../../utility/connection";
import { ObjectId } from 'mongodb';

export default async function MarkSeen(req,res){
    const body = JSON.parse(req.body);
    const ids = body.ids;
    await Client.connect();
    const db = Client.db('test');
    const id = new ObjectId(ids);
    const userCollection = db.collection('userMail');
    const filter = { _id: id }; 
    const update = { $set: { seen : true } };
    const result = await userCollection.updateOne(filter, update);
    res.status(200).json({status:'ok'})
    return;
}