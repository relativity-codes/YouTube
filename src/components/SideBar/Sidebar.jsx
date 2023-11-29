import SidebarLinkCard from './SidebarLinkCard';
import './styles.css';
import React from 'react';

function Sidebar() {
    const linkgroupOne = [{
        icon: '/svgicons/film.svg',
        title: 'Home',
        href: '/home'
    }, {
        icon: '/svgicons/heart.svg',
        title: 'Favourites',
        href: '/home'
    }, {
        icon: '/svgicons/trending-up.svg',
        title: 'Trending',
        href: '/home'
    }, {
        icon: '/svgicons/calender.svg',
        title: 'Coming soon',
        href: '/home'
    }];

    const linkgroupTwo = [{
        icon: '/svgicons/users.svg',
        title: 'Community',
        href: '/home'
    }, {
        icon: '/svgicons/message-circle.svg',
        title: 'Social',
        href: '/home'
    }];

    const linkgroupThree = [{
        icon: '/svgicons/sliders.svg',
        title: 'Settings',
        href: '/home'
    }, {
        icon: '/svgicons/log-out.svg',
        title: 'Log out',
        href: '/home'
    }];
    return (
        <div className='sidebar-container'>
            <div className='logo-section'>
                <div className='logo'><img src={'/svgicons/coffe.svg'} alt="logo" height={30} width={30} /><span className='logo-name'>Binge Ghibli</span></div>
            </div>
            <div className='other-section'>
                <div className='sections'>{
                    linkgroupOne.map((items, index) => (
                        <SidebarLinkCard key={index} icon={items.icon} title={items.title} href={items.href} />
                    ))
                }</div>
                <div className='sections'>{linkgroupTwo.map((items, index) => (
                    <SidebarLinkCard key={index} icon={items.icon} title={items.title} href={items.href} />
                ))
                }</div>
                <div className='sections'>{linkgroupThree.map((items, index) => (
                    <SidebarLinkCard key={index} icon={items.icon} title={items.title} href={items.href} />
                ))
                }</div>
            </div>
        </div>
    )
};

export default Sidebar; 
