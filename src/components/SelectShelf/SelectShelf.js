import { ReactComponent as ArrowIcon } from "../../icons/arrow-drop-down.svg";
import styles from './SelectShelf.module.css';
import SHELF_STATUS from '../../enum/index';
import { update } from "../../api/BooksAPI";

let shelfs = Object.keys(SHELF_STATUS);
const SelectShelf = ({ book }) => {
    console.log({ s: book.shelf });
    return (
        <span className={styles.floatingButton}>
            <ArrowIcon className={styles.arrowIcon} />
            <select value={book.shelf || "none"} onChange={async (e) => { await update(book, e.target.value); console.log(e.target.value, book) }}>
                <option value="" disabled>Move to...</option>
                {shelfs.map(s => <option value={s} key={s}>
                    {SHELF_STATUS[s]}
                </option>
                )}
                <option value="none">none</option>
            </select>
        </span>
    )
}
export default SelectShelf;