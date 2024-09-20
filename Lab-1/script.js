const apiKey = 'b1GMh4j2xLjES9MgysDIScqy6w8ebk9T'; 
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');

searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`)
    .then(response => response.json())
    .then(data => {
      gifContainer.innerHTML = '';
      data.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
