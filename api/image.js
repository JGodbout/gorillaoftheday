const path = require('path');
const fs = require('fs');

export default function handler(req, res) {
  const startDate = new Date('2024-07-18');
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const daysSinceStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const imageName = `${daysSinceStart}.jpg`;

  const imagePath = path.join(process.cwd(), 'public', 'images', imageName);

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    res.status(404).send('Image not found');
  }
}