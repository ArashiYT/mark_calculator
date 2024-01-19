import { useAppSelector } from "../../hooks/redux"

export default function CalculatorResult() {
    const { calc, result } = useAppSelector(state => state.calc)
    
    return (
        <div className={`calc_res ${(calc && "calc_open")}`}>
            <b>Result:</b> {result}
        </div>
    )
}