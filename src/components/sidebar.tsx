import { useState, useRef, useEffect, useContext, useMemo } from "react";
import { setStatusBtn, setStatusCalc } from "../utils/calc_reducer";
import { setLoading } from "../utils/page_reducer";
import { FaXmark, FaBars } from "react-icons/fa6";
import { ThemeContext } from "../contexts/Theme";
import { setMark } from "../utils/mark_reducer";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import useMarks from "../hooks/useMarks";
import { LINKS } from "../data/sidebar"
import "../styles/sidebar.css";

export default function SidebarSwitcher() {
    const [openSwitcher, setOpenSwitcher] = useState(false)
    const { theme, switchTheme } = useContext(ThemeContext)
    const MainContainer = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const getMarks = useMarks()

    const isOpen = useMemo(() => {
        return -1 * Number(!openSwitcher)
    }, [openSwitcher]);

    const LinkClick = (path: string) => {
        if(!location.href.includes(path)) {
            dispatch(setStatusCalc(false))
            dispatch(setStatusBtn(false))
        }

        setOpenSwitcher(false)
    }

    const Links = LINKS.map((link, key) => (
        <Link 
            onClick={() => LinkClick(link.href)} 
            className="sidebar_link"
            tabIndex={isOpen}
            to={link.href}
            key={key} 
        >
            { link.name }
        </Link>
    ))

    useEffect(() => {
        //Hiding Sidebar when you leave sidebar
        const clickEvent = (e: MouseEvent) => e.target === MainContainer.current && setOpenSwitcher(false)
        window.addEventListener("click", clickEvent)

        //add marks to Redux
        const marks = getMarks()
        dispatch(setMark(marks))
        dispatch(setLoading(false))
        
        return () => {
            window.removeEventListener("click", clickEvent)
        }
    }, [])

    return (
        <section className="main">
            <aside className="sidebar_container">
                <div className={`sidebar_icon ${theme == "dark" && "sidebar_dark"}`}>
                    <button onClick={() => setOpenSwitcher(!openSwitcher)}>
                        { openSwitcher ? <FaXmark /> : <FaBars /> }
                    </button>
                </div>
                <div className={`sidebar_content ${openSwitcher && 'open'}`}>
                    <span className="sidebar_text_menu">Calculator Mark</span>
                    <div className="sidebar_text">
                        <hr className="sidebar_hr" />
                        <div className="sidebar_data">
                            { Links }
                            <div className="sidebar_theme">
                                <button tabIndex={isOpen} 
                                    className="sidebar_link sidebar_button" 
                                    onClick={switchTheme}
                                >
                                    Theme: { theme }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            { openSwitcher && <div className="sidebar_background" ref={MainContainer}></div> }
            <main className={`content  ${openSwitcher && "padding"}`}> 
                <Outlet /> 
             </main>
        </section>
    )
}