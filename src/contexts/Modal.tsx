import { createContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export type TModalOpen = { state: "open", title: string, body: React.ReactNode }
export type TModalState = TModalOpen | TModalClose
export type TModalClose = { state: "close" }

export type TModalContextValue = { switchModal: (value: "reset" | Omit<TModalOpen, "state">) => void}
export const ModalContext = createContext({} as TModalContextValue)

export default function ModalProvider({ children }: TChildren) {
    const [modal, setModal] = useState<TModalState>({ state: "close" })
    
    const switchModal = (value: "reset" | Omit<TModalOpen, "state">) => {
        if(value === "reset") return setModal({ state: "close" })
        setModal({ ...value, state: "open" })
    }


    return (
        <ModalContext.Provider value={{switchModal}}>
            <div className="modal_container">
                <div className="modal_header">
                    <div className="modal_close">
                        <FaXmark />
                    </div>
                    <div className="modal_title">
                        { modal.state == "open" && modal.title }
                    </div>
                </div>
                <div className="modal_body">
                    { modal.state === "open" && modal.body }
                </div>
            </div>
            { children }
        </ModalContext.Provider>
    )
}