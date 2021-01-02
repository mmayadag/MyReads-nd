import React, { useState, useEffect } from "react";
import { search, getIndexesAll } from "../api/BooksAPI";
import BookShelf from "../components/BookShelf/BookShelf";

const SearchPage = () => {
    const [value, setValue] = useState('');
    const [books, setBooks] = useState([]);
    const [isloading, setLoading] = useState(null);
    const [myBooks, setMybooks] = useState(null);

    useEffect(() => {
        const fetchIndexes = async () => {
            let data = await getIndexesAll();
            setMybooks(data);
            console.log({ myBooks: data });
        }
        fetchIndexes();
    }, []);

    const searchBooksData = async () => {
        if (value.length > 0) {
            setLoading(true);
            let data = await search(value);
            console.log({ m: data })

            // TODO: dropdown
            if (myBooks) {
                data = data.map(b => {
                    let extra = {}
                    if (myBooks && myBooks[b.id] !== undefined) {
                        extra = { shelf: myBooks[b.id] }
                    }
                    return { ...b, ...extra }
                })
            }
            setBooks(data);
            setLoading(false);
        }
    }
    const searchHandler = () => {
        searchBooksData();
    }
    return (
        <>
            <h2>Search Page</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={searchHandler}>Search</button>
            <br />
            {!isloading &&
                <BookShelf books={books} title="results" />
            }
        </>
    )
}

export default SearchPage;
