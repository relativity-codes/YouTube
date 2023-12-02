import './styles.css';
import MovieCard from './MovieCard/MovieCard';
import TransParentNavBar from './TransparentNavBar/TransParentNavBar';
import React from 'react';

function HomeScreenBody() {
    const trending = [{
        id: 1,
        name: "Grave of Fireflies",
        year: 2005,
        classifications: "War, Drama",
        favorite: false,
        url: '/images/fireflies.jpeg'
    }, {
        id: 2,
        name: "Kiki’s Delivery Service",
        year: 1989,
        classifications: "Fantasy",
        favorite: false,
        url: '/images/kiki_and_jiji.jpeg'
    },
    {
        id: 3,
        name: "Princess Mononoke",
        year: 1997,
        classifications: "History, Fantasy",
        favorite: true,
        url: '/images/princess-mononoke.jpeg'
    }, {
        id: 4,
        name: "The Secret World of Arrietty",
        year: 2010,
        classifications: "Drama, Romance",
        favorite: false,
        url: '/images/fireflies.jpeg'
    },
    ];

    const continue_watching = [{
        id: 1,
        name: "Howls moving castle",
        year: 2005,
        classifications: "Fantasy",
        favorite: false,
        url: '/images/howls_moving_castle.jpeg'
    }, {
        id: 2,
        name: "Rainy days",
        year: 1989,
        classifications: "Fantasy, Romance",
        favorite: false,
        url: '/images/rainydays.jpeg'
    },
    {
        id: 3,
        name: "Bad Husbands",
        year: 1997,
        classifications: "History, Fantasy",
        favorite: true,
        url: '/images/bad_husband.jpeg'
    }
    ];
    return (
        <div className='home-screen-body-container'>
            <div className='navbar-section'><TransParentNavBar /></div>
            <div className='section-top' style={{ backgroundImage: "url('/images/spirited-away.gif')" }}>
                <div className='inner-container'>
                    <div className='space'></div>
                    <div className='content-description'>
                        <div className='movie-name'>Spirited Away</div>
                        <div className='movie-classification'>2001 | Fantasy |  Movie</div>
                        <div className='button-section'><div className='button'>Watch Now</div> <div className='icon'><img src={'/svgicons/heart-white.svg'} alt="icon" /></div></div>
                    </div>
                </div>
            </div>
            <div className='section-middle-bottom'>
                <div className='wrapper-trending'>
                    <h3>Trending</h3>
                    <div className='trending'>
                        {trending.map((items, index) => (
                            <div className='items'>
                                <MovieCard key={index} name={items.name} year={items.year} classification={items.classifications} url={items.url} id={items.id} favorite={items.favorite} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='wrapper-continue-watching'>
                    <h3>Continue Watching</h3>
                    <div className='continue-watching'>
                        {continue_watching.map((items, index) => (
                            <div className='items'>
                                <MovieCard key={index} name={items.name} year={items.year} classification={items.classifications} url={items.url} id={items.id} favorite={items.favorite} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreenBody