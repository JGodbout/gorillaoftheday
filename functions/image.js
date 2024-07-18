exports.handler = async (event, context) => {
    const startDate = new Date('2024-07-18');
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysSinceStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const imageName = `${daysSinceStart}.jpg`;
    
    const imageUrl = `https://${process.env.URL}/images/${imageName}`;
  
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl,
      },
    };
  };