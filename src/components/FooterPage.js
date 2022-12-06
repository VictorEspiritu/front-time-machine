import {menuFooter} from "../data/MenuFooter"
import CardContact from "./CardContact"
import Newsletter from "./Newsletter"

function FooterPage() {

    return (
        <footer className="ht-footer full-width-ft">
            <div className="row">
                <div className="flex-parent-ft">
                    <div className="flex-child-ft item1">
                        <CardContact></CardContact>
                    </div>
                    {menuFooter.map((menu, i) => (
                        <div className={"flex-child-ft item" + (i + 2)} key={'dfoot-'+i}>
                            <h4>{menu.title}</h4>
                            <ul>
                                {menu.items.map((item,i) => (
                                    <li key={'lif-'+i}><a href={item.link}>{item.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex-child-ft item5">
                        <Newsletter></Newsletter>
                    </div>
                </div>
                <div className="ft-copyright">
                    <div className="ft-left">
                        <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                    </div>
                    <div className="backtotop">
                        <p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage