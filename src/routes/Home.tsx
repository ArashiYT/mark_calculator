import MarksComponent from "../components/Marks/marks";
import styles from"../styles/routes/home.module.css";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div className={styles.home_container}>
            <h1>Welcome to the Calculator Mark!</h1>
            <div className={styles.home_flex}>
                <div className={styles.home_links}>
                    <h2>MENU:</h2>
                    <div className={styles.home_link}>   
                        <Link to="/calc">
                            You want calculate? Click here
                        </Link>
                        <Link to="/Mark">
                            Yo want add markers? Click here
                        </Link>
                    </div>
                </div>
                <div className={styles.home_marks}>
                    <h2>Your Marks right now:</h2>
                    <div className={styles.home_mark}>
                        <MarksComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}