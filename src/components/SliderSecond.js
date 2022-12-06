import Slider from "react-slick"

function SliderSecond({content}) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider className="slick-multiItem2" {...settings}>
            {content.map((con, n) => (
                <div className="slide-it" key={"sdts-" + n}>
                    <div className="movie-item">
                        <div className="mv-img">
                            <img src={con.image} alt="" />
                        </div>
                        <div className="hvr-inner">
                            <a href={con.link}> Read more <i className="ion-android-arrow-dropright"></i> </a>
                        </div>
                        <div className="title-in">
                            <h6><a href="#">{con.title}</a></h6>
                            <p><i className="ion-android-star"></i><span>{con.rate}</span> /10</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default SliderSecond