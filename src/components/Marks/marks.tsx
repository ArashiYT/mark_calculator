import { useAppSelector } from "../../hooks/redux"
import LoadingPage from "../loading"
import Mark from "./mark"

export default function MarksComponent() {
    const { loading } = useAppSelector(state => state.page)
    const { marks } = useAppSelector(state => state.mark)

    if(loading) return <LoadingPage />

    if(marks.length <= 0) return <div>No marks</div>
    return marks.map((mark, key) => (
            <Mark key={key} mark={mark} />
        )
    )
}