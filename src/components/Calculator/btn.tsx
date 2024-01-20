import { setCalcResult, setStatusBtn, setStatusCalc } from "../../utils/calc_reducer"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import Confirm from "../../components/Modal/confirm"
import { ModalContext } from "../../contexts/Modal"
import round from "../../helpers/round"
import next from "../../helpers/next"
import wait from "../../helpers/wait"
import { useContext } from "react"


export default function CalculatorBtn() {
    const { button, calc } = useAppSelector(state => state.calc)
    const { marks } = useAppSelector(state => state.mark)
    const { switchModal } = useContext(ModalContext)
    const dispatch = useAppDispatch()

    const calculate = () => {
        const callback = async (value: boolean) => {
            switchModal("reset")
            if(!value) return

            await next(() => dispatch(setStatusBtn(true)))
            
            const totalScore = marks.reduce((total, mark) => total + (mark.number * mark.weight), 0)
            const totalLength = marks.reduce((total, mark) => total + mark.weight, 0)
            
            await next(() => dispatch(setCalcResult(round(totalScore / totalLength, 2))))
            await wait(500)

            await next(() => dispatch(setStatusCalc(true)))

        }

        switchModal({
            title: "Are you sure you want to calculate?",
            body: <Confirm callback={callback} />,
        })
    }

    return (
        <div className={`calc_btn_container ${button && "calc_hidden"} ${calc && "calc_nothing"}`}>
            <h2>Calculate Marks</h2>
            <button className={`calc_button ${marks.length <= 0 && "calc_block"}`} disabled={marks.length <= 0 || button} onClick={calculate}>
                Click to Calculate 
            </button>
        </div>
    )
}