import { useState, useRef, useEffect, useContext } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { setErrorMessage, setLoading } from "../utils/page_reducer";
import { FaXmark, FaBars } from "react-icons/fa6";
import { ThemeContext } from "../contexts/Theme";
import { addMark } from "../utils/mark_reducer";
import { Link, Outlet } from "react-router-dom";
import useMarks from "../hooks/useMarks";
import { LINKS } from "../data/sidebar"
import Loading from "./loading";
import "../styles/sidebar.css";
import Error from "./error"

export default function SidebarSwitcher() {
    const [openSwitcher, setOpenSwitcher] = useState(false)
    const { theme, switchTheme } = useContext(ThemeContext)
    const MainContainer = useRef<HTMLDivElement>(null)
    const page = useAppSelector(state => state.page)
    const [getMarks, errorMessage] = useMarks()
    const dispatch = useAppDispatch()

    const Links = LINKS.map((link, key) => (
        <Link 
            onClick={() => setOpenSwitcher(false)} 
            className="sidebar_link"
            to={link.href}
            key={key} 
        >
            {link.name}
        </Link>
    ))

    useEffect(() => {
        //Hiding Sidebar when you leave sidebar
        const clickEvent = (e: MouseEvent) => e.target === MainContainer.current && setOpenSwitcher(false)
        
        window.addEventListener("click", clickEvent)

        //add marks to Redux
        const marks = getMarks()
        if(errorMessage != '') dispatch(setErrorMessage(errorMessage))

        for(const mark of (marks ?? [] as TMark[])) {
            dispatch(addMark(mark))
        }

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
                                <button className="sidebar_link sidebar_button" onClick={switchTheme}>Theme: {theme}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            {openSwitcher && <div className="sidebar_background" ref={MainContainer}></div>}
            <main className={`content  ${openSwitcher && "padding"}`}> {
                    page.errorMessage != "" ? <Error error={page.errorMessage}/> :
                    page.loading ? <Loading /> : 
                    <Outlet /> 
            } </main>
        </section>
    )
}