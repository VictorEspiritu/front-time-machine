function LastNews() {

    const news = [
        { image: 'images/uploads/blogv21.jpg', url: 'blogdetail.html', title: 'Godzilla: King Of The Monsters Adds O’Shea Jackson Jr', date: '27 Mar 2017', summary: 'Looks like Kong: Skull Island started a tradition with its casting of Straight ...' },
        { image: 'images/uploads/blogv22.jpg', url: 'blogdetail.html', title: 'First Official Images of Alicia Vikander As Tomb Raider’s Lara Croft', date: '27 Mar 2017', summary: 'Aside from the her digital incarnation, the most recognisable image of Tomb ...' },
        { image: 'images/uploads/blogv23.jpg', url: 'blogdetail.html', title: 'New Spider-Man: Homecoming Poster Finds Peter Parker At Rest', date: '27 Mar 2017', summary: 'He might be a primary protector of New York City, but at heart, Peter Parker is ...' },
        { image: 'images/uploads/blogv24.jpg', url: 'blogdetail.html', title: 'Joseph Gordon-Levitt Directing Moive Musical Comedy Wingmen', date: '27 Mar 2017', summary: 'A little over a year ago, we learned that Joseph Gordon-Levitt and Channing ...' },
        { image: 'images/uploads/blogv25.jpg', url: 'blogdetail.html', title: 'Godzilla: King Of The Monsters Adds O’Shea Jackson Jr', date: '27 Mar 2017', summary: 'Looks like Kong: Skull Island started a tradition with its casting of Straight ...' },
        { image: 'images/uploads/blogv29.jpg', url: 'blogdetail.html', title: 'Godzilla: King Of The Monsters Adds O’Shea Jackson Jr', date: '27 Mar 2017', summary: 'Looks like Kong: Skull Island started a tradition with its casting of Straight ...' },
    ]

    return (
        <div className="latestnew full-width">
            <div className="row">
                <div className="col-md-9">
                    <div className="title-hd">
                        <h2>Latest news</h2>
                        <a href="bloggrid.html" className="viewall">see all news <i className="ion-ios-arrow-right"></i></a>
                    </div>
                    <div className="latestnewv2">
                        {news.map((nw, n) => (
                        <div className="blog-item-style-2" key={'lln-' + n}>
                            <a href="blogdetail.html"><img src={nw.image} alt={nw.title} /></a>
                            <div className="blog-it-infor">
                                <h3><a href={nw.url}>{nw.title}</a></h3>
                                <span className="time">{nw.date}</span>
                                <p>{nw.summary}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="sidebar">
                        <div className="sb-facebook sb-it">
                            <h4 className="sb-title">Find us on Facebook</h4>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" height="315" style={{ width: '100%', border: 'none', overflow: 'hidden' }} ></iframe>
                        </div>
                        <div className="sb-twitter sb-it">
                            <h4 className="sb-title">Tweet to us</h4>
                            <div className="slick-tw">
                                <div className="tweet item" id="">
                                </div>
                                <div className="tweet item" id="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LastNews