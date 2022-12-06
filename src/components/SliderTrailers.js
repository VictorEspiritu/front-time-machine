import { useEffect, useState } from "react";
import Slider from "react-slick"

function SliderTrailers(params) {

    const [active, setActive] = useState({ nav1: null, nav2: null })

    let slider1, slider2;

    useEffect(() => {
        setActive({ nav1: slider1, nav2: slider2 })
    }, [])

    let settings1 = {
        arrows: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: active.nav2,
    };

    let settings2 = {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: active.nav1,
        swipeToSlide: true,
        focusOnSelect: true
    };

    let moviesNow = [
        { name: 'Wonder Woman', image: 'images/uploads/trailer7.jpg', duration: '2:30' },
        { name: 'Oblivion: Official Teaser Trailer', image: 'images/uploads/trailer2.jpg', duration: '2:37' },
        { name: 'Exclusive Interview:  Skull Island', image: 'images/uploads/trailer6.jpg', duration: '2:44' },
        { name: 'Logan: Director James Mangold Interview', image: 'images/uploads/trailer3.png', duration: '2:43' },
        { name: 'Beauty and the Beast: Official Teaser Trailer 2', image: 'images/uploads/trailer4.png', duration: '2:32' },
        { name: 'Fast&Furious 8', image: 'images/uploads/trailer5.jpg', duration: '3:11' },
        { name: 'Intersetelar', image: 'images/uploads/trailer2.jpg', duration: '4:37' }
    ]

    let videosNow = [
        { title: 'video1', url: 'https://www.youtube.com/embed/1Q8fG0TtVAY' },
        { title: 'video2', url: 'https://www.youtube.com/embed/w0qQkSuWOS8' },
        { title: 'video3', url: 'https://www.youtube.com/embed/44LdLqgOpjo' },
        { title: 'video4', url: 'https://www.youtube.com/embed/gbug3zTm3Ws' },
        { title: 'video5', url: 'https://www.youtube.com/embed/e3Nl_TCQXuw' },
        { title: 'video6', url: 'https://www.youtube.com/embed/NxhEZG0k9_w' },
        { title: 'video7', url: 'https://www.youtube.com/embed/UoSSbmD9vqc' }
    ]

    return (
        <>
            <div className="title-hd">
                <h2>in theater</h2>
                <a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
            </div>
            <div className="videos">
                <Slider className="slider-for-2 video-ft" {...settings1} ref={(slider) => (slider1 = slider)}>
                    {videosNow.map((video, v) => (
                        <div>
                            <iframe className="item-video" src={video.url} title={video.title}></iframe>
                        </div>
                    ))}
                </Slider>
                <Slider className="slider-nav-2 thumb-ft" {...settings2} ref={(slider => (slider2 = slider))}>
                    {moviesNow.map((movie, i) => (
                        <div className="item" key={'snmt-' + i}>
                            <div className="trailer-img">
                                <img src={movie.image} alt={movie.name} width="4096" height="2737" />
                            </div>
                            <div className="trailer-infor">
                                <h4 className="desc">{movie.name}</h4>
                                <p>{movie.duration}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default SliderTrailers