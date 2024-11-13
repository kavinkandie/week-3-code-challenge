# Flatdango Movie Theater Application

## Description
Flatdango is a web application for a movie theater that allows users to purchase movie tickets from the theater's available movies. The application displays movie details and manages ticket sales in real-time.

## Features
- View a list of all available movies
- See detailed information about each movie including:
    - Movie poster
    - Title
    - Runtime
    - Showtime
    - Available tickets
    - Description
- Purchase tickets for available shows
- Real-time ticket availability updates
- Sold out status indication when all tickets are purchased

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server (for mock backend)

## Project Setup

### Prerequisites
- Node.js installed on your machine
- JSON Server installed globally (`npm install -g json-server`)

### Installation Steps
1. Navigate to the project directory:
```bash
cd flatdango
```

2. Create a `db.json` file with the following content:
```json
[
  {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 27,
    "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  {
    "id": "2",
    "title": "Manos: The Hands Of Fate",
    "runtime": "118",
    "capacity": 50,
    "showtime": "06:45PM",
    "tickets_sold": 44,
    "description": "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    "poster": "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  }
]
```

3. Start the JSON server:
```bash
json-server --watch db.json
```

4. Open `index.html` in your web browser.

## Project Structure
```
flatdango/
├── README.md
├── index.html
├── db.json
└── index.js
```

## Usage
1. When the application loads, you'll see a list of movies on the left side and the details of the first movie on the right.
2. Click on any movie in the list to view its details.
3. If tickets are available, you can click the "Buy Ticket" button to purchase a ticket.
4. The number of available tickets will update in real-time.
5. When all tickets are sold, the "Buy Ticket" button will be replaced with a "SOLD OUT" message.

## API Endpoints
The application interacts with the following endpoints:

- GET `/films` - Returns an array of all movies
- GET `/films/:id` - Returns a single movie by ID

## Core Deliverables
- [x] Users can see the first movie's details when the page loads
- [x] Users can see a menu of all movies on the left side of the page
- [x] Users can buy tickets for a movie