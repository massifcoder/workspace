import Client from "../../../utility/connection";

export default async function ReceiveMail(req,res){
    const body = JSON.parse(req.body);
    const sender = body.senderMail;
    await Client.connect();
    const db = Client.db('test');
    const userCollection = db.collection('mailusers');
    const user = await userCollection.findOne({email_id:sender});
    if(user){
        const recCollection = db.collection('userMail');
        const mailCollection = recCollection.find({senderMail:sender}).sort({timestamp:-1}).limit(20);
        const documents = await mailCollection.toArray();
        res.status(200).json({staus:'ok',response:documents})
        return;
    }
    res.status(500).json({status:'no'})
}