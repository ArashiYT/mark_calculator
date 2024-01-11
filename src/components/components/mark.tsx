import { FaXmark } from "react-icons/fa6"
import "../../styles/components/mark.css"

export type TMarkPageProps = { mark: TMark }
export default function MarkPage({mark}: TMarkPageProps) {
    const remove = (uuid: string) => {
        console.log(uuid)
    }

    return (
        <div className="mark_container">
            <div className="mark_close" onClick={() => remove(mark.uuid)}>
                <FaXmark />
            </div>
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