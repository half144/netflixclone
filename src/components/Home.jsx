import FeaturedMovie from "./FeaturedMovie"
import MovieRow from "./MovieRow"
import { useEffect, useState } from 'react'
import { getHomeList, getMovieInfo } from '../tmdb'


function Home() {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)

    const loadAll = async () => {
        let list = await getHomeList()
        setMovieList(list)
        let trending = list.filter(e => e.slug === 'trending')
        let randomChose = Math.floor(Math.random() * (trending[0].items.results.length - 1))
        let chose = trending[0].items.results[randomChose]
        let choseInfo = await getMovieInfo(chose.id, 'movie')
        setFeaturedData(choseInfo)
    }

    useEffect(() => {
        loadAll()
    }, [])

    return (
        <div className="page">
            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            <section className="listas">
                {movieList.map((item, key) => {
                    return (
                        <MovieRow key={key} title={item.title} items={item.items} />
                    )
                })}
            </section>
        </div>
    )
}

export default Home
