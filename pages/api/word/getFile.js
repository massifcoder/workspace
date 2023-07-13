import Client from '../../../utility/connection'

export default async function GetFile(req,res){
    const body = JSON.parse(req.body);
    const token = body.token;
    const fileName = body.fileName;
    const db = Client.db('test')
    const userCollection = db.collection('documents');
    const so = await userCollection.findOne({token:token,name:fileName});
    if(so){
        res.status(200).send({data:so.data})
    }
    res.status(200).send({data:'Empty'})
}