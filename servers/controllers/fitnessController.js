const axios = require('axios');

exports.getFitnessAdvice = async (req, res) => {
  const { prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-4',
        prompt: prompt,
        max_tokens: 150
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const advice = response.data.choices[0].text.trim();
    res.json({ advice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get fitness advice' });
  }
};
