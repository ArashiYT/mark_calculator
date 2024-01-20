import MarksComponent from "../components/Marks/marks"
import { Outlet } from "react-router-dom"
import "../styles/mark_container.css"

export default function MarkContainer() {
    return (
        <div className="markContainer_container">
            <div className="markContainer_text">
                <h1>Your Marks:</h1>
                <div className="markContainer_content">
                    <MarksComponent />
                </div>
            </div>
            <Outlet />
        </div>
    )
}