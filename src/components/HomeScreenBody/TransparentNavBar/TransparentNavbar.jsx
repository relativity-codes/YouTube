import { useNavigate } from 'react-router-dom';
import './styles.css';
import React from 'react';

function TransParentNavBar() {
    const navigate = useNavigate();
    return (
        <div className='navbar-container'>
            <div className='section'>
                <div onClick={() => { navigate('movies') }}>Movies</div>
                <div onClick={() => { navigate('series') }}>Series</div>
                <div onClick={() => { navigate('documentaries') }}>Documentaries</div>
            </div>
            <div className='section'>
                <div onClick={() => { navigate('search') }}><img src={'/svgicons/search-white.svg'} alt="icon" /></div>
                <div onClick={() => { navigate('notification') }}><img src={'/svgicons/bell-white.svg'} alt="icon" /></div>
                <div onClick={() => { navigate('search') }}><img src={'/images/avatar.png'} alt="icon" className='avatar' /><span className='avatar-name'>iamicahgc</span></div>
            </div>
        </div>
    )
}

export default TransParentNavBar
