import { useAppSelector } from "../../hooks/redux"
import Mark from "./mark"

export default function MarksComponent() {
    const {marks} = useAppSelector(state => state.mark)

    if(marks.length <= 0) return <div>No marks</div>
    return <>{
        marks.map((mark, key) => (
            <Mark key={key} mark={mark} />
        ))
    }
            
        </>
}