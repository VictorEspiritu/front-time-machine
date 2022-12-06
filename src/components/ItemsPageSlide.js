import { listItems } from "../data/ListItems"
import ItemsSlide from "./ItemsSlide"

function ItemsPageSlide() {
    
    return (
        <div className="movie-items  full-width">
            <div className="row">
                <div className="col-md-12">
                    {listItems.map((item, i) => (
                            <ItemsSlide item={item} key={'mirc-'+i}></ItemsSlide>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemsPageSlide