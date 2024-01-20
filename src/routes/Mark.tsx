import styles from "../styles/routes/mark.module.css"

export function MarkPage() {
    const submit = (e: React.FormEvent<HTMLFormElement>) => { 
        // TODO: validate and submit plus [ograniczenia]
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <div className={styles.space}></div>
            <div className={styles.flex}>
                <form className={styles.content} onSubmit={submit}>
                    <div className={styles.inputFull}>
                        <input type="text" id="name" required />
                        <label htmlFor="name">Enter Name...</label>
                    </div>
                    <div className={styles.inputFull}>
                        <input type="number" id="name" required />
                        <label htmlFor="name">Enter Number of Mark...</label>
                    </div>
                    <div className={styles.inputFull}>
                        <input type="number" id="name" required />
                        <label htmlFor="name">Enter Number of Weight...</label>
                    </div>
                    <button type="submit">SEND DATA</button>
                </form>
            </div>
        </div>
    )
}