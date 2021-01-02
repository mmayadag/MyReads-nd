import React, { useState, useEffect } from "react";
import { getAll, get } from "../api/BooksAPI";

import BookShelfs from "../components/BookShelf/BookShelfs";
import AddButton from '../components/AddButton/AddButton';


const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [isloading, setLoading] = useState(null);
    const [myBooks, setMyBooks] = useState({});
    useEffect(() => {
        const fetchBooksData = async () => {
            setLoading(true);
            let data = await getAll();
            let first = data[0];
            console.log({ data, book1: await get(first.id) })
            setBooks(data);
            setLoading(false);
        }
        fetchBooksData();
    }, []);


    return (
        <>
            <BookShelfs books={books} isLoading={isloading} />
            <AddButton />
        </>
    )
}

export default MainPage;
