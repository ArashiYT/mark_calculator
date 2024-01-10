import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Mark, Calculator, NotFound } from "./routes"
import SidebarSwitcher from "./sidebar"

export default function IndexPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SidebarSwitcher />} >
                    <Route index element={<Home />} />
                    <Route path="/calc" element={<Calculator />} />
                    <Route path="/mark" element={<Mark />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}