import { getHomeList, getMovieInfo } from '../tmdb'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import FeaturedMovie from './FeaturedMovie'

function Category() {
    const [info, setInfo] = useState(null)

    let { id } = useParams()

    let getInfo = async () => {
        let choseInfo = await getMovieInfo(id, 'movie')
        setInfo(choseInfo)
    }

    useEffect(() => {
        getInfo()
    }, [id])

    return (
        <div className="infor">
            {info &&
                <FeaturedMovie item={info}/>
            }
        </div>
    )
}

export default Category