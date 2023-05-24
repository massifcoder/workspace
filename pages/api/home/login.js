import Client from '../../../utility/connection'

export default async function Login(req,res){
    const body = JSON.parse(req.body);
    const mail = body.mail;
    const password = body.password;
    await Client.connect();
    const db = Client.db('test');
    const collection = db.collection('mailusers');
    const result = await collection.findOne({email_id:mail,password:password})
    if(result){
        return res.status(200).json({user:'ok',token:result._id.toString(),name:result.name})
    }
    return res.status(200).json({'user':'no'})
}