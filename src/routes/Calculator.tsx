import CalculatorResult from "../components/Calculator/result"
import CalculatorBtn from "../components/Calculator/btn"
import styles from "../styles/routes/calc.module.css"

export function CalculatorPage() {
    return (
        <div className={styles.calc_container}>
            <h1>Calculate the marks:</h1>
            <div className={styles.calc_flex}>
                <div className={styles.calc_content}>
                    <CalculatorBtn />
                    <CalculatorResult />
                </div>
            </div>
        </div>
    )
}