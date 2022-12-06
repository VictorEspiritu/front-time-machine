import TabContent from "./TabContent";

function ItemsSlide({ item }) {

    return (
        <>
            <div className="title-hd">
                <h2>{item.title}</h2>
                <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
            </div>
            <TabContent children={item.categories}></TabContent>
        </>
    )
}

export default ItemsSlide