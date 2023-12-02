import HomeScreenBody from '../../components/HomeScreenBody/HomeScreenBody';
import Sidebar from '../../components/SideBar/Sidebar';
import './styles.css';
import React from 'react';

function Home() {
    return (
        <div className='container-home'>
            <div className='sidebar'><Sidebar /></div>
            <div className='main-container'> <HomeScreenBody /></div>
        </div>
    )
}

export default Home