import { createContext, useState, useRef, useEffect } from "react";
import "../styles/contexts/box.css"

export type TBoxContextProps = { switchBox: (str: TBoxMessage | null) => void }
export type TBoxMessage = { message: string, type: string }

export type TBoxContentSuccess = { type: "success", data: TBoxMessage}
export type TBoxContentNothing = { type: "nothing" }

export type TBoxContent = TBoxContentSuccess | TBoxContentNothing
export const BoxContext = createContext<TBoxContextProps>({} as TBoxContextProps);

export default function BoxProvider({ children }: TChildren) {
    const [text, setText] = useState<TBoxContent>({ type: "nothing" })
    const message = useRef<HTMLSpanElement>(null)
    const info = useRef<HTMLSpanElement>(null)
    const box = useRef<HTMLDivElement>(null)
    
    const switchBox = (data: TBoxMessage | null) => {
        if(data === null) return setText({ type: "nothing" })
        setText({ type: "success", data: data })    
    }

    useEffect(() => {
        const handlerClick = async (event: MouseEvent) => {
            if(event.target != message.current && event.target != info.current && event.target != box.current) {
                return switchBox(null)
            }
        }

        window.addEventListener("click", handlerClick)
        return () => window.removeEventListener("click", handlerClick)
    }, [])

    return (
        <BoxContext.Provider value={{ switchBox }}>
            <div ref={box} className={`box_container ${text.type == "success" && "box_show"}`}>
                <span ref={info} className="box_info">{ text.type == "success" && text.data.type + ":"}</span>
                <span ref={message} className="box_message">{ text.type == "success" && text.data.message }</span>
            </div>
            { children }
        </BoxContext.Provider>
    )
}