document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0f4a0cb9fa19362a87f70aff424bfbe0';
    const movieIds = [551, 568, 29934, 503, 18];

    const movieList = document.getElementById('movie-list');

    movieIds.forEach(id => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                fetch (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
                    .then(creditsResponse => creditsResponse.json())
                    .then(creditsData => {
                        const director = creditsData.crew.find(member => member.job === 'Director').name;
                        const listItem = document.createElement('li');
                        listItem.classList.add('movie-item');
                        listItem.innerHTML = `
                            <h2>${data.title}</h2>
                            <p><strong>Year:</strong> ${data.release_date.split('-')[0]}</p>
                            <p><strong>Director:</strong> ${director}</p>
                            <p><strong>Plot:</strong> ${data.overview}</p>
                            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title} poster" />
                        `;
                        movieList.appendChild(listItem);
                    });
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});