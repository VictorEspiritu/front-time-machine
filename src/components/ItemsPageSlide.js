import { listItems } from "../data/ListItems"

function ItemsPageSlide() {
    
    return (
        <div className="movie-items  full-width">
            <div className="row">
                <div className="col-md-12">
                    {listItems.map((item, i) => (
                            <ItemsPageSlide item={item} key={'mirc-'+i}></ItemsPageSlide>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemsPageSlide