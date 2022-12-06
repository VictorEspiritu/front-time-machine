import { useState } from "react"
import SliderSecond from "./SliderSecond"

function TabContent({children}) {

    const [activeTab, setActiveTab] = useState('tlin-0');

    const onClickTabItem = (e) => {
        e.preventDefault();
        setActiveTab(e.target.parentElement.id)
    }

    return (
        <>
            <div className="tabs">
                <ul className="tab-links">
                    {children.map((cat, c) => (
                        <li id={"tlin-" + c} className={activeTab  === ("tlin-" + c) ? "active" : ""} key={"tlin-" + c}><a href="#" onClick={onClickTabItem}>{cat.label}</a></li>
                    ))}
                </ul>
                <div className="tab-content" style={{height: '28.5em'}}>
                    {children.map((tab, t) => (
                        <div className={activeTab  === ("tlin-" + t) ? "tab active" : "tab"}  key={"tcs-" + t}>
                            <div className="row">
                                <SliderSecond content={tab.content}></SliderSecond>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TabContent