import { useAppSelector, useAppDispatch } from "../hooks/redux"
import useLocalStorage from "../hooks/useLocalStorage"
import styles from "../styles/routes/mark.module.css"
import { setStatus } from "../utils/input_reducer"
import { setMark } from "../utils/mark_reducer"
import ValidError from "../helpers/ValidError"
import { BoxContext } from "../contexts/Box"
import { useRef, useContext } from "react"
import useMarks from "../hooks/useMarks"
import wait from "../helpers/wait"
import { v4 } from "uuid"

export function MarkPage() {
    const { status } = useAppSelector(state => state.input)
    const WeightRef =  useRef<HTMLInputElement>(null)
    const NameRef = useRef<HTMLInputElement>(null)
    const NrRef =  useRef<HTMLInputElement>(null)
    const { switchBox } = useContext(BoxContext)
    const setData = useLocalStorage("marks")
    const dispatch = useAppDispatch()
    const getMarks = useMarks()

    const submitHandler = async () => {
        dispatch(setStatus(true))
        switchBox(null)
        
        try {
            if (!NameRef.current || !WeightRef.current || !NrRef.current) throw new Error()
                
            // Get Values from input
            const Weight = Number(WeightRef.current.value)
            const Nr = Number(NrRef.current.value)
            const Name = NameRef.current.value
    
            // Validate Numbers
            if(isNaN(Weight)) throw new ValidError("Weight must be a number", WeightRef.current)
            if(isNaN(Nr)) throw new ValidError("Nr must be be a number", NrRef.current)

            // Validate SCOPE Numbers
            if(Nr < 1 || Nr > 6) throw new ValidError("Nr must be between 1 and 6", NrRef.current)
            if(Weight < 1 || Weight >= 6) throw new ValidError("Weight must be between 1 and 5", WeightRef.current)

            //Validate String
            if(!Name.match(/^[A-Z][a-z]{3,}(( - [A-Z][a-z]+)|( [A-Z][a-z]+))$/)) 
                throw new ValidError("Name must be a valid string", NameRef.current)
            
            if(Name.length < 1 || Name.length > 20) 
                throw new ValidError("Name must be at least 1 to 20 characters", NameRef.current)

            const newMarks = [...getMarks(), { name: Name, number: Nr, weight: Weight, uuid: v4() } as TMark]
            
            // Save Data
            dispatch(setMark(newMarks))
            setData(newMarks)

            await wait(500)

            // Reset values
            NameRef.current.value = ""
            WeightRef.current.value = ""
            NrRef.current.value = ""
        }

        catch (e) {
            if(e instanceof ValidError) {
                if(e.refObject) e.refObject.focus()
                
                switchBox({ type: "error", message: e.message})
            }
        }
        
        finally {
            dispatch(setStatus(false))
        }
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.space}></div>
            <div className={styles.flex}>
                <form className={styles.content} action={submitHandler}>
                    <div className={styles.inputFull}>
                        <input type="text" name="name" id="name" required disabled={status} ref={NameRef} />
                        <label htmlFor="name">Enter Name...</label>
                    </div>
                    <div className={styles.inputFull}>
                        <input type="number" name="mark" id="name" required disabled={status} ref={NrRef} />
                        <label htmlFor="name">Enter Number of Mark...</label>
                    </div>
                    <div className={styles.inputFull}>
                        <input type="number" id="name" name="weight" required disabled={status} ref={WeightRef} />
                        <label htmlFor="name">Enter Number of Weight...</label>
                    </div>
                    <button type="submit" disabled={status}>SEND DATA</button>
                </form>
            </div>
        </div>
    )
}
