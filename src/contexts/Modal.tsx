import { createContext, useState, useRef, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import "../styles/contexts/modal.css"

export type TModalOpen = { state: "open", title: string, body: React.ReactNode }
export type TModalState = TModalOpen | TModalClose
export type TModalClose = { state: "close" }

export type TModalContextValue = { switchModal: (value: "reset" | Omit<TModalOpen, "state">) => void}
export const ModalContext = createContext({} as TModalContextValue)

export default function ModalProvider({ children }: TChildren) {
    const [modal, setModal] = useState<TModalState>({ state: "close" })
    const modalRef = useRef<HTMLDivElement | null>(null)

    const switchModal = (value: "reset" | Omit<TModalOpen, "state">) => {
        if(value === "reset") return setModal({ state: "close" })
        setModal({ ...value, state: "open" })
    }

    useEffect(() => {
        const clickEvent = (event: MouseEvent) => {
            console.log(event)
            if(event.target === modalRef.current) return switchModal("reset")
        }

        window.addEventListener("click", clickEvent)
        return () => window.removeEventListener("click", clickEvent)
    }, [])

    return (
        <ModalContext.Provider value={{switchModal}}>
            <div className={`modal_container ${modal.state == "open" && "modal_open"}`} ref={modalRef}>
                <div className="modal_content">
                    <div className="modal_header">
                        <button className="modal_close" onClick={() => switchModal("reset")}>
                            <FaXmark />
                        </button>
                        <div className="modal_title">
                            { modal.state == "open" && modal.title }
                        </div>
                    </div>
                    <div className="modal_body">
                        { modal.state === "open" && modal.body }
                    </div>
                </div>
            </div>
            { children }
        </ModalContext.Provider>
    )
}