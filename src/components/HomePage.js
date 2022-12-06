import ItemsPageSlide from "./ItemsPageSlide"
import LastNews from "./LastNews"
import TrailersMain from "./TrailersMain"
import SliderMain from "./SliderMain"

function HomePage() {

    return (
        <div className="buster-light">
            <SliderMain></SliderMain>
            <ItemsPageSlide></ItemsPageSlide>
            <TrailersMain></TrailersMain>
            <LastNews></LastNews>
        </div>
    )
}

export default HomePage