// State management
let currentMovie = null;

// DOM Elements
const filmsList = document.getElementById('films');
const movieDetails = document.getElementById('movieDetails');

// Fetch movie data
async function fetchMovie(id) {
    const response = await fetch(`http://localhost:3000/films/${id}`);
    const movie = await response.json();
    return movie;
}

async function fetchAllMovies() {
    const response = await fetch('http://localhost:3000/films');
    const movies = await response.json();
    return movies;
}

// Calculate available tickets
function getAvailableTickets(movie) {
    return movie.capacity - movie.tickets_sold;
}

// Render functions
function renderMovieDetails(movie) {
    const availableTickets = getAvailableTickets(movie);
    const isSoldOut = availableTickets === 0;

    movieDetails.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                <div class="movie-info">
                    <h1>${movie.title}</h1>
                    <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>
                    <p><strong>Showtime:</strong> ${movie.showtime}</p>
                    <p><strong>Available Tickets:</strong> <span id="ticketCount">${availableTickets}</span></p>
                    <p>${movie.description}</p>
                    ${isSoldOut
        ? '<p class="sold-out">SOLD OUT!</p>'
        : `<button class="buy-ticket" onclick="buyTicket(${movie.id})">Buy Ticket</button>`
    }
                </div>
            `;
    currentMovie = movie;
}

function renderMovieList(movies) {
    filmsList.innerHTML = movies.map(movie => `
                <li class="film item" onclick="loadMovie(${movie.id})">
                    ${movie.title}
                </li>
            `).join('');
}

// Event handlers
async function loadMovie(id) {
    const movie = await fetchMovie(id);
    renderMovieDetails(movie);
}

function buyTicket(id) {
    if (!currentMovie) return;

    const availableTickets = getAvailableTickets(currentMovie);
    if (availableTickets > 0) {
        currentMovie.tickets_sold += 1;
        renderMovieDetails(currentMovie);
    }
}

// Initialize app
async function initialize() {
    try {
        const movies = await fetchAllMovies();
        renderMovieList(movies);

        // Load the first movie by default
        if (movies.length > 0) {
            await loadMovie(movies[0].id);
        }
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Start the app
initialize();