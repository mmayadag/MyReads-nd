import React from 'react';
import BookShelf from "./BookShelf";
import Loading from '../Loading/Loading';
import SHELF_STATUS from '../../enum/index';

let shelfs = Object.keys(SHELF_STATUS);

const BookShelfs = ({ books, isLoading }) => {
    console.log({ d: books });
    return (
        <>
            {isLoading ?
                <Loading /> :
                shelfs.map(s => <BookShelf
                    key={s}
                    books={books.filter(b => b.shelf === s)}
                    title={SHELF_STATUS[s]} />)
            }
        </>
    )
};

export default BookShelfs;