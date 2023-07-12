import Client from '../../../utility/connection'

export default async function StoringFile(req,res){
    const body = JSON.parse(req.body);
    const token = body.token;
    const data = body.data;
    const byteSize = Buffer.byteLength(data, 'utf8');
    const kilobyteSize = byteSize / 1024;
    const currentDate = new Date();
    const utcDate = currentDate.toISOString().slice(0, 10);
    const value = {
        token : token,
        data : data,
        size : kilobyteSize,
        type : 'docx',
        modify: utcDate,
        name:body.name
    }
    await Client.connect();
    const db = Client.db('test')
    const userCollection = db.collection('documents');
    const ch = await userCollection.findOne({name:body.name});
    if(ch){
        value.name = value.name + Math.floor(Math.random()*41);
    }
    const so = await userCollection.insertOne(value);
    res.status(200).send({'status':true});
}