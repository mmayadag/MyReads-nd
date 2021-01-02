import Book from "../Book/Book";
import styles from './BookShelf.module.css'; // Import css modules stylesheet as styles

const BookShelf = ({ books, title }) => (
    <>
        { books.length > 0 ?
            <section className={styles.section}>
                <h2 className={styles.title}>{title}</h2>
                <div className="">
                    {books.map(item =>
                        <Book item={item} key={item.id} />
                    )}
                </div>
            </section>
            :
            <h1>Empty</h1>
        }
    </>
)

export default BookShelf;