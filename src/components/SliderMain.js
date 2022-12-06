import {sliderData} from "../data/SliderData"

import Slider from "react-slick"

function SliderMain() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider sliderv2">
            <div className="container">
                <div className="row">
                    <Slider className="slider-single-item" {...settings}>
                        {sliderData.map((slide, i) => (
                            <div className="movie-item" key={'sld-'+i}>
                                <div className="row">
                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                        <div className="title-in">
                                            <div className="cate">
                                                {slide.categories.map((cat, e) => (
                                                    <span className="yell" key={'cats-'+e}><a href={"#" + cat}>{cat}</a></span>
                                                ))}
                                            </div>
                                            <h1><a href="#">{slide.title}<br /><span>{slide.date}</span></a></h1>
                                            <div className="social-btn">
                                                {slide.actions.map((act, a) => (
                                                    <a href={act.link} key={'act-'+a} className="parent-btn"><i className={act.icon}></i> {act.label}</a>
                                                ))}
                                            </div>
                                            <div className="mv-details">
                                                <p><i className="ion-android-star"></i><span>{slide.rate}</span> /10</p>
                                                <ul className="mv-infor">
                                                    {slide.details.map((det, d) => (
                                                        <li key={'det-' + d}>  {det} </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <div className="btn-transform transform-vertical">
                                                <div><a href={slide.linkDetail} className="item item-1 redbtn">more detail</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <div className="mv-img-2">
                                            <a href="#"><img src={slide.image} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderMain