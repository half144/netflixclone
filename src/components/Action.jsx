import { useState, useEffect } from 'react'
import { getHomeList, getMovieInfo, allAction } from '../tmdb'
import FeaturedMovie from './FeaturedMovie'
import MovieRow from './MovieRow'
import './Action.css'

function Action() {

    const [Action, setAction] = useState([])
    const [FeaturedAction, setFeaturedAction] = useState(null)

    const getAction = async () => {
        const movieList = await allAction()
        let randomChose = Math.floor(Math.random() * (movieList[0].results.length - 1))
        let chose = movieList[0].results[randomChose]
        let featuredAction = await getMovieInfo(chose.id, 'movie')
        setFeaturedAction(featuredAction)
        setAction(movieList)
    }

    useEffect(() => {
        getAction()
    }, [])

    return (
    <>   
        {FeaturedAction && <FeaturedMovie item={FeaturedAction}/>}
        <div className="listasAction">
            <h2>Muita ação</h2>
            {Action.length > 0 && Action.map((item, key) => 
            <MovieRow key={key} items={item}/>)}
        </div>    
    </>
    )
}

export default Action