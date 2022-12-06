
function CelebritiesSection() {

    const celebrities = [
        { name: 'Samuel N. Jack', Image: 'images/uploads/ava1.jpg', profesion: 'Actor' },
        { name: 'Benjamin Carroll', Image: 'images/uploads/ava2.jpg', profesion: 'Actriz' },
        { name: 'Beverly Griffin', Image: 'images/uploads/ava3.jpg', profesion: 'Actor' },
        { name: 'Justin Weaver', Image: 'images/uploads/ava4.jpg', profesion: 'Director' },
        { name: 'Emeric Espiritu', Image: 'images/uploads/ava1.jpg', profesion: 'Manager' }
    ]

    return (
        <div className="celebrities">
            <h4 className="sb-title">Spotlight Celebrities</h4>
            {celebrities.map((cel, i) => (
                <div className="celeb-item" key={'cst-' + i}>
                    <a href="#"><img src={cel.Image} alt="" width="70" height="70" /></a>
                    <div className="celeb-author">
                        <h6><a href="#">{cel.name}</a></h6>
                        <span>{cel.profesion}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CelebritiesSection