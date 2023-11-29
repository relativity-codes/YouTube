import './styles.css'
import React from 'react'

function MovieCard({ favorite, name, year, classifications, url, id }) {
    return (
        <div className='movie-card-container' style={{ backgroundImage: `url(${url})` }}>
            <div className='top'>
                {
                    favorite ? (<div className='icon2'>
                        <img src={'/svgicons/heart-purple.svg'} alt="icon" />
                    </div>)
                        :
                        (<div className='icon1'>
                            <img src={'/svgicons/heart-white.svg'} alt="icon" />
                        </div>)
                }

            </div>
            <div className='bottom'>
                <div className='name'>{name}</div>
                <div className='year'>{`${year} | ${classifications}`}</div>
            </div>
        </div>
    )
}

export default MovieCard