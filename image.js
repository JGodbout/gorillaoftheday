document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('2024-07-18');
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysSinceStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const imageName = `${daysSinceStart}.jpg`;

    // Create an image element and set its source
    const img = document.createElement('img');
    img.src = imageName;
    img.alt = 'Daily Image';

    // Append the image to the body
    document.body.appendChild(img);
});