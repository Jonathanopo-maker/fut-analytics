// api/matches.js
export default async function handler(req, res) {
  const apiKey = process.env.API_FOOTBALL_KEY;
  
  // Exemplo: buscando jogos do dia atual (exige formatar a data como YYYY-MM-DD)
  const date = new Date().toISOString().split('T')[0];
  
  const response = await fetch(`https://v3.football.api-sports.io/fixtures?date=${date}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': apiKey
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
