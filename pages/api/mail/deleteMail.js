import Client from '../../../utility/connection'
import { ObjectId } from 'mongodb';

export default async function DeleteMail(req,res){
    const body = JSON.parse(req.body);
    const ids = body._id;
    await Client.connect();
    const db = Client.db('test');
    const userCollection = db.collection('userMail');
    const id = new ObjectId(ids);
    console.log(id);
    const filter = { _id: id }; 
    const del = await userCollection.deleteOne(filter);
    console.log(del);
    res.status(200).send({'suc':'ture'})
}