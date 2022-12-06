function DrowdownList({list}) {

    return (
        <li className="dropdown first">
            <a href="#" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                {list.title} <i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <ul className="dropdown-menu level1">
                {list.items.map((item, i) =>(
                    <li key={'lidl1-' + i}><a href={item.link}>{item.label}</a></li>
                ))}
            </ul>
        </li>
    )
}

export default DrowdownList