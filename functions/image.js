const path = require('path');
const fs = require('fs');

exports.handler = async (event, context) => {
  const startDate = new Date('2024-07-18');
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const daysSinceStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const imageName = `${daysSinceStart}.jpg`;

  const imagePath = path.resolve(__dirname, '../images', imageName);
  
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: imageBuffer.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: `Image not found: ${imagePath}`,
    };
  }
};