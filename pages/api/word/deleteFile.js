import Client from '../../../utility/connection'

export default async function DeleteFile(req,res){
    const body = JSON.parse(req.body);
    const token = body.token;
    const name = body.name;
    await Client.connect();
    const db = Client.db('test')
    const userCollection = db.collection('documents');
    userCollection.deleteOne({token:token,name:name});
    res.status(200).send({status:true});
}