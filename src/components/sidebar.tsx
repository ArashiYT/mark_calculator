import { useState, useRef, useEffect, useContext } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { ThemeContext } from "../contexts/Theme";
import { Link, Outlet } from "react-router-dom"
import { LINKS } from "../data/sidebar"
import "../styles/sidebar.css";

export default function SidebarSwitcher() {
    const [openSwitcher, setOpenSwitcher] = useState(false)
    const { theme, switchTheme } = useContext(ThemeContext)
    const MainContainer = useRef<HTMLElement>(null)

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
        const clickEvent = (e: MouseEvent) => {
            if(e.target === MainContainer.current) setOpenSwitcher(false)
        }

        window.addEventListener("click", clickEvent)

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

            <main className={`content  ${openSwitcher && "sidebar_background"}`} ref={MainContainer}>
                <Outlet />
            </main>
        </section>
    )
}