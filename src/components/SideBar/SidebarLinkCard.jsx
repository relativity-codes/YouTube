import React from 'react'
import { useNavigate } from 'react-router-dom'

function SidebarLinkCard({ icon, title, href }) {
    const navigate = useNavigate();
    return (
        <div className='sidebar-link-card' onClick={() => { navigate(href) }}>
            <div className='side-bar-card-icon'><img src={icon} alt="icon" height={20} width={20} /></div>
            <div className='side-bar-card-title'>{title}</div>
        </div>
    )
}

export default SidebarLinkCard
