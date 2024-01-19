import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import useLocalStorage from "../../hooks/useLocalStorage"
import convertNumber from "../../helpers/convertNumber"
import { ModalContext } from "../../contexts/Modal"
import { setMark } from "../../utils/mark_reducer"
import Confirm from "../Modal/confirm"
import { FaXmark } from "react-icons/fa6"
import "../../styles/components/mark.css"
import next from "../../helpers/next"
import { useContext } from "react"


export type TMarkPageProps = { mark: TMark }
export default function MarkPage({ mark }: TMarkPageProps) {
    const setLocalStorage = useLocalStorage<TMark[]>("marks")
    const { marks } = useAppSelector(state => state.mark)
    const { switchModal } = useContext(ModalContext)
    const dispatch = useAppDispatch()
    
    const remove = (uuid: string) => {
        const callback =  async (value: boolean) => {
            switchModal("reset")
            if(!value) return

            // Remove mark from redux state and getting others marks
            const newMarks = marks.filter(m => m.uuid !== uuid)
            await next(() => dispatch(setMark(newMarks)))

            // TODO: add encript in data
            await next(() => setLocalStorage(newMarks))
        } 

        switchModal({
            body: <Confirm callback={callback} />,
            title: "Are you sure to delete this mark?",
        })
    }

    return (
        <div className="mark_container">
            <button className="mark_close" onClick={() => remove(mark.uuid)}>
                <FaXmark />
            </button>
            <div className="mark_content">
                <div>{mark.name}:</div>
                <div className="mark_mark">
                    <div>{convertNumber(mark.number)}</div>
                    <div>[{mark.weight}]</div>
                </div>
            </div>
        </div>
    )
}