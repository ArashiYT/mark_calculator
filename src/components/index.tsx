import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Mark, Calculator, NotFound } from "../routes"
import MarkContainer from "./mark_container"
import SidebarSwitcher from "./sidebar"

export default function IndexPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SidebarSwitcher />} >
                    <Route index element={<Home />} />
                    <Route path="/" element={<MarkContainer />}>
                        <Route path="/calc" element={<Calculator />} />
                        <Route path="/mark" element={<Mark />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}