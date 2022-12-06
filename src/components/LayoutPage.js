import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";
import HeaderPage from "./HeaderPage";
import PreLoader from "./PreLoader";

function LayoutPage() {

    return (
        <>
            <PreLoader duration={500}></PreLoader>
            <HeaderPage></HeaderPage>
            <Outlet />
            <FooterPage></FooterPage>
        </>
    )
}

export default LayoutPage