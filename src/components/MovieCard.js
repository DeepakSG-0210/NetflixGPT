import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
const MovieCard = ({ posterPath }) => {
  return (
    <div>
        <img className='h-[180px] justify-evenly' alt="Movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard