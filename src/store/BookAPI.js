import axios from "axios";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

/* Endpoint
The following endpoints are available:

    GET /status
    GET /books
    GET /books/:id
    PUT /books/:id { shelf }
    POST /search { query, maxResults }
*/
/* Book Object

    - id
    - shelf: [currentlyReading, wantToRead , read]
    - title
    - subtitle
    - authors : [ ]
    - publishers
    - bublishedDate
    - description
    - industryIdentifiers : [{type , identifier}]
    - readingModes : {text,image} bool,bool
    - pageCount
    - printType
    - categories : [ ]
    - averageRting
    - ratingsCount
    - maturityRating
    - allowAnonLogging
    - contentVersion
    - panelizationSummary :{conatinsEpubBubbles,containsImageBubbles} bool,bool
    - imageLinks : {smallThumbnail,thumbnail}
    - language : 
    - previewLink
    - infoLink
    - canonicalVolumeLink


*/
// create an instance 
export const udAPI = axios.create({
  baseURL: "https://reactnd-books-api.udacity.com",
  timeout: 10000,
  headers: {
    // Accept: "application/json",
    Authorization: token,
  },
});
