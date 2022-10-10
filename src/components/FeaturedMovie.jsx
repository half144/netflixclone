import './FeaturedMovie.css'

function FeaturedMovie({ item }) {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">

                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong>{
                        item.genres.map((genre, key) => (
                        <p key={key}>{genre.name}</p>
                    ))}</div>
                    <div className="buttons">
                        <div className="button-watch">
                            <input id='button-watch' type="button" value="Assistir" />
                        </div>
                        <div className="button-info">
                            <input className="input-info" type="button" value="Mais informações" />
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturedMovie