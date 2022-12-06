import { useState } from "react"

function PreLoader({duration}) {

    const [display, setDisplay] = useState('')

    setTimeout(() => {
        setDisplay('none')
    }, duration );

    return (
        <div id="preloader" style={{display: display}}>
            <img className="logo" src="images/logo2.png" alt="" width="119" height="58"/>
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
        </div>
    )
}

export default PreLoader