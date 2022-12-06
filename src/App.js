import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom"
import LayoutPage from "./components/LayoutPage"
import AuthorPage from "./components/AuthorsPage"
import NotFoundPage from "./components/NotFoundPage"


function App() {

    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />}></Route>
                <Route path="/authors" element={<AuthorPage />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}

export default App