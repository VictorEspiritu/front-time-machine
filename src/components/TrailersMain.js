import CelebritiesSection from "./CelebritiesSection"
import SliderTrailers from "./SliderTrailers"

function TrailersMain() {

    return (
        <div className="trailers full-width">
            <div className="row ipad-width">
                <div className="col-md-9 col-sm-12 col-xs-12">
                   <SliderTrailers></SliderTrailers>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="sidebar">
                       <CelebritiesSection></CelebritiesSection>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TrailersMain