exports.handler = async function(event, context) {
  const startDate = new Date('2024-07-18');
  const today = new Date();
  const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  
  return {
    statusCode: 302,
    headers: {
      Location: `/image_${daysSinceStart}.jpg`,
      'Cache-Control': 'no-cache'
    }
  };
};