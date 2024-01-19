import "../styles/routes/home.css";
import { Link } from "react-router-dom";
import MarksComponent from "../components/Marks/marks";

export function HomePage() {
    return (
        <div className="home_container">
            <h1>Welcome to the Calculator Mark!</h1>
            <div className="home_flex">
                <div className="home_links">
                    <h2>MENU:</h2>
                    <div className="home_link">   
                        <Link to="/calc">
                            You want calculate? Click here
                        </Link>
                        <Link to="/add">
                            Yo want add markers? Click here
                        </Link>
                    </div>
                </div>
                <div className="home_marks">
                    <h2>Your Marks right now:</h2>
                    <div className="home_mark">
                        <MarksComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}