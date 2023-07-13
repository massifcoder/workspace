import Client from '../../../utility/connection'

export default async function SignUp(req,res){
    const body = JSON.parse(req.body);
    const naam = body.name;
    const mail = body.mail;
    const password = body.password;
    const profile = {name:naam,email_id:mail,password:password,pictureUrl:null}
    await Client.connect();
    const db = Client.db('test');
    const collection = db.collection('mailusers');
    const result = await collection.findOne({email_id:mail})
    if(result){
        console.log(result)
        return res.status(200).json({'user':'ok',token:result._id.toString()})
    }
    const insert = await collection.insertOne(profile);
    return res.status(200).json({user:'no',token:insert.insertedId.toString()})
}