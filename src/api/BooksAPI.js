
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// Get Book Detail
export const get = (bookId) =>
    fetch(`${api}/books/${bookId}`, { headers })
        .then(res => res.json())
        .then(data => data.book)

// Get All Books
export const getAll = () =>
    fetch(`${api}/books`, { headers })
        .then(res => res.json())
        .then(data => data.books)

// Update book Shelf Status
export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(res => res.json())

// Search books
export const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json())
        .then(data => data.books)

// Get my Books indexes
export const getIndexesAll = async () => {
    let indexes = {}
    try {
        let books = await getAll();
        books.forEach(b => { indexes[b.id] = b.shelf; })
    } catch (e) {

    }
    return indexes;
}