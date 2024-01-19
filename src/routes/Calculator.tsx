import CalculatorResult from "../components/Calculator/result"
import CalculatorBtn from "../components/Calculator/btn"
import MarksComponent from "../components/Marks/marks"
import "../styles/routes/calc.css"

export function CalculatorPage() {
    return (
        <div className="calc_container">
            <h1>Calculate the marks:</h1>
            <div className="calc_flex">
                <div className="calc_content">
                    <CalculatorBtn />
                    <CalculatorResult />
                </div>
                <div className="calc_marks">
                    <h1>Your Marks:</h1>
                    <div className="calc_marks_content">
                        <MarksComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}