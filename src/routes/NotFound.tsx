import styles from "../styles/routes/not-found.module.css"
import { FaExclamationTriangle } from "react-icons/fa"

export function NotFoundPage() {
    return (
        <div className={styles.container}>
            <span className={styles.code}>404</span>
            <span className={styles.mess}>Not Found Page</span>
            <span className={styles.icon}>
                <FaExclamationTriangle />
            </span>
        </div>
    )
}