import { createContext, useState } from "react";

export type TBoxContextProps = { switchBox: (str: TBoxMessage | null) => void }
export type TBoxMessage = { message: string, type: string }

export type TBoxContentSuccess = { type: "success", data: TBoxMessage}
export type TBoxContentNothing = { type: "nothing" }

export type TBoxContent = TBoxContentSuccess | TBoxContentNothing
export const BoxContext = createContext<TBoxContextProps>({} as TBoxContextProps);

export default function BoxProvider({ children }: TChildren) {
    const [text, setText] = useState<TBoxContent>({ type: "nothing" })

    const switchBox = (data: TBoxMessage | null) => {
        if(data === null) return setText({ type: "nothing" })
        setText({ type: "success", data: data })    
    }

    return (
        <BoxContext.Provider value={{ switchBox }}>
            <div className={`box_container ${text.type == "nothing" && "box_hidden"}`}>
                <span>{ text.type == "success" && text.data.type }</span>
                <span>{ text.type == "success" && text.data.message }</span>
            </div>
            { children }
        </BoxContext.Provider>
    )
}