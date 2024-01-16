import "../../styles/components/confirm.css"

export type TConfirmProps = { callback: (value: boolean) => void }
export default function Confirm({ callback }: TConfirmProps) {
    return (
        <div className="confirm_buttons">
            <button onClick={() => callback(true)}>Yes</button>
            <button onClick={() => callback(false)}>No</button>
        </div>
    )
}