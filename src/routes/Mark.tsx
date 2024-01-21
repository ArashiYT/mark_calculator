import { useAppSelector, useAppDispatch } from "../hooks/redux"
import styles from "../styles/routes/mark.module.css"
import { setStatus } from "../utils/input_reducer"
import wait from "../helpers/wait"

export function MarkPage() {
    const { status } = useAppSelector(state => state.input)
    const dispatch = useAppDispatch()

    const submitHandler = async (e: FormData) => {
        //TODO: complete this function
        
        dispatch(setStatus(true))
        
        await wait(1000)
        console.log(e)

        dispatch(setStatus(false))
    }

    return (
        <div className={styles.container}>
            <div className={styles.space}></div>
            <div className={styles.flex}>
                <form className={styles.content} action={submitHandler}>
                    <div className={styles.inputFull}>
                        <input type="text" name="name" id="name" required disabled={status} />
                        <label htmlFor="name">Enter Name...</label>
                    </div>
                    <div className={styles.inputFull}>
                        <input type="number" name="mark" id="name" required disabled={status} />
                        <label htmlFor="name">Enter Number of Mark...</label>
                    </div>
                    <div className={styles.inputFull}>
                        <input type="number" id="name" name="weight" required disabled={status} />
                        <label htmlFor="name">Enter Number of Weight...</label>
                    </div>
                    <button type="submit" disabled={status}>SEND DATA</button>
                </form>
            </div>
        </div>
    )
}
