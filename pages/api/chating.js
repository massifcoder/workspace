const { Configuration, OpenAIApi } = require("openai");

const API_KEY = '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'

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const rep = req.body
  const prompt = await JSON.parse(rep).prompt
  if(!prompt || prompt===''){
    console.log('Error occured')
    return new Response('please send your response',{status:400})
  }
  const aiResult = await openai.createCompletion({
    model:'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0.9,
    max_tokens : 100,
    frequency_penalty : 0.5,
    presence_penalty : 0
  })
  const response = aiResult.data.choices[0].text?.trim() || 'Sorry,theres some problem';
  res.status(200).json({ text : response })
}
