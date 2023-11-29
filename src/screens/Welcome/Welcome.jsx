import React from 'react';
import './styles.css';

function Welcome() {
    return (
        <div className='container'>
            <div className='center-container'>
                <div className='items'><img src={'/logo.png'} alt="logo" /></div>
                <div className='items content'>Enjoy the latest ghiblis</div>
                <div className='items'><a href="/home"><button> Log in</button></a></div>
                <div className='items content'> No account? <span className='sign-up'>Sign up</span></div>
            </div>
        </div>
    )
};

export default Welcome;
