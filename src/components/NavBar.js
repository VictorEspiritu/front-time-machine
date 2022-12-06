import DrowdownList from "./DrowndownList"
import { menuHeader } from "../data/MenuHeader"

function NavBar() {

    return (
        <nav id="mainNav" className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
                <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <div id="nav-icon1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <a href="/"><img className="logo" src="images/logo2.png" alt="" width="119" height="58" /></a>
            </div>
            <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav flex-child-menu menu-left">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    {menuHeader.left.filter((item) => item.type === 'list').map((list, i) => (
                        <DrowdownList list={list} key={'d1-' + i}></DrowdownList>
                    ))}

                </ul>
                <ul className="nav navbar-nav flex-child-menu menu-right">
                    {menuHeader.right.filter((item) => item.type === 'list').map((list, i) => (
                        <DrowdownList list={list} key={'d2-' + i}></DrowdownList>
                    ))}
                    {menuHeader.right.filter((item) => item.type === 'link').map((link, i) => (
                        <li key={'li1-' + i} className={link.title === 'LOG In' ? 'loginLink' : (link.title === 'Sign up' ? 'btn signupLink' : '')}><a href={link.link}>{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar