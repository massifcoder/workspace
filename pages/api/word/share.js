import nodemailer from 'nodemailer';


export default async function Share(req,res){
    console.log('Bulava aya he!')
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'massifcoder@gmail.com',
          pass: 'nttvgrtvnioioiko',
        },
      });
    const body = JSON.parse(req.body);
    const email_id = body.email;
    const message = {
        from: 'massifcoder@gmail.com',
        to: email_id,
        subject: 'You are Invited to Work Together.',
        text: 'Respected, Vishal Sharma has invited you to work with him on the Nanda Doc word file, follow the link to start work https://localhost:3000/file.',
      };
      try {
        const info = await transporter.sendMail(message);
        console.log(info)
        res.status(200).json({ message: `Email sent: ${info.response}` });
      } catch (error) {
        console.error(error);
    
        res.status(500).json({ message: 'Failed to send email' });
      }
}