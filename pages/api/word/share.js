import nodemailer from 'nodemailer';

export default async function Share(req,res){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: process.env.MAIL,
          pass: process.env.PASSWORD,
        },
      });
    const body = JSON.parse(req.body);
    const email_id = body.email;
    const message = {
        from: 'massifcoder@gmail.com',
        to: email_id,
        subject: 'You are Invited to Work Together.',
        text: 'You are Invited to Work Together. Over Nanda Docs, you can share your work with your friends and colleagues. Over Nanda docs can use ai tools to help you in your work.',
      };
      try {
        const info = await transporter.sendMail(message);
        res.status(200).json({ message: `Email sent: ${info.response}` });
      } catch (error) {
        res.status(500).json({ message: 'Failed to send email' });
      }
}
