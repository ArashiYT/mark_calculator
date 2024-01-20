import styles from "../../styles/routes/calc.module.css"
import { useAppSelector } from "../../hooks/redux"

export default function CalculatorResult() {
    const { calc, result } = useAppSelector(state => state.calc)
    
    return (
        <div className={`${styles.calc_res} ${calc && styles.calc_open}`}>
            <b>Result:</b> {result}
        </div>
    )
}