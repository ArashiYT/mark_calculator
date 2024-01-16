import { removeMark } from "../../utils/mark_reducer"
import { ModalContext } from "../../contexts/Modal"
import { useAppDispatch } from "../../hooks/redux"
import Confirm from "../components/confirm"
import { FaXmark } from "react-icons/fa6"
import "../../styles/components/mark.css"
import { useContext } from "react"

export type TMarkPageProps = { mark: TMark }
export default function MarkPage({ mark }: TMarkPageProps) {
    const { switchModal } = useContext(ModalContext)
    const dispatch = useAppDispatch()
    
    const remove = (uuid: string) => {
        const callback = (value: boolean) => {
            switchModal("reset")

            if(!value) return
            dispatch(removeMark({ uuid }))
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
                    <div>{mark.number}</div>
                    <div>[{mark.weight}]</div>
                </div>
            </div>
        </div>
    )
}