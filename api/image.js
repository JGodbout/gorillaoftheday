export default function handler(req, res) {
  const startDate = new Date('2024-07-18');
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const daysSinceStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const imageName = `${daysSinceStart}.jpg`;

  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const imageUrl = `${baseUrl}/images/${imageName}`;

  res.writeHead(302, {
    Location: imageUrl,
  });
  res.end();
}