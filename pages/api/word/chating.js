import OpenAI  from "openai";

const API_KEY = String(process.env.OPEN_API_KEY)

const openai = new OpenAI({
  apiKey : API_KEY
});

export default async function handler(req, res) {
  const rep = req.body
  const prompt = await JSON.parse(rep).prompt
  if(!prompt || prompt===''){
    console.log('Error in openai.')
    return res.json(200).json({text: 'Try later, server down.'})
  }

  const aiResult = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages : [
      {
        role : 'user',
        content : prompt
      }
    ]
  });
  const response = aiResult.choices[0].message.content || 'Sorry,theres some problem';
  res.status(200).json({ text : response })
}
