import styles from './AddButton.module.css'; // Import css modules stylesheet as styles
import { Link } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../icons/add.svg";

const AddButton = () => (
    <>
        <Link className={styles.floatingButton} to={{
            pathname: "/search",
            // state: { myBooks }
        }} > <PlusIcon style={{ width: '30px', height: '30px' }} /></Link>
    </>
)

export default AddButton;