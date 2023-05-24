import Client from '../../../utility/connection'

export default async function SendMail(req,res){
    const body = JSON.parse(req.body);
    const receiver = body.receiver;
    const sender = body.sender;
    const senderMail = body.senderMail;
    const mail = body;
    await Client.connect();
    const db = Client.db('test')
    const userCollection = db.collection('mailusers');
    const user = await userCollection.findOne({email_id:receiver[0]});
    if(user){
        const recCollection = db.collection('userMail');
        const mailCollection = await recCollection.insertOne({mail:mail,sender:sender,senderMail:senderMail ,receiver:receiver[0],timestamp:Date.now(),seen:false});
        res.status(200).json({staus:'ok',response:mailCollection})
        return;
    }
    console.log('Fail')
    res.status(200).json({staus:'no'})
}