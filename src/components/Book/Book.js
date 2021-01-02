import React from "react";
import styles from './Book.module.css'; // Import css modules stylesheet as styles
import SelectShelf from '../SelectShelf/SelectShelf';

const BookAuthors = ({ authors }) => <>

    <div className={styles.authors}>
        {authors?.map(a => <div key={a}>{a}</div>)}
    </div>
</>

const bookStyles = {
    thumbnail: {
        width: '100%',
        height: '210px',
        backgroundRepeat: ' no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        position: 'relative'
    }
}
const Book = ({ item }) => {
    const { title, authors, imageLinks } = item;
    console.log({ item });
    return (
        <article className={styles.article}>
            <div>
                <div style={{
                    backgroundImage: `url(${imageLinks?.thumbnail})`,
                    ...bookStyles.thumbnail
                }}>
                    <SelectShelf book={item} />
                </div>
                <p className={styles.title}>{title}</p>
                <BookAuthors authors={authors} />
            </div>
        </article >
    )
}

export default Book;
