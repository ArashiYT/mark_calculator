import { useAppSelector } from "../../hooks/redux";
import Mark from '../components/mark'
import "../../styles/routes/home.css";

export function HomePage() {
    const marks = useAppSelector(state => state.mark)

    return (
        <div className="home_container">
            <h1>Welcome to the Calculator Mark!</h1>
            <div className="home_flex">
                <div>content</div>
                <div className="home_marks">
                    <h2>Your Marks right now:</h2>
                    <div className="home_mark"> { 
                        marks.length <= 0 ? <div>No marks</div>:
                        marks.map((mark, key) => (
                            <Mark key={key} mark={mark} />
                        ))
                    } </div>
                </div>
            </div>
        </div>
    )
}