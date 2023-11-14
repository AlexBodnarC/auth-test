import React from 'react'
import '../../styles/dashboard.css'

const sidebar_routes = [
    {
        name: 'Home',
        icon: 'icons/sidebar_icons/home.svg'
    }, {
        name: 'Submit Violations',
        icon: 'icons/sidebar_icons/violet.svg'
    }, {
        name: 'Whitelist',
        icon: 'icons/sidebar_icons/whitelist.svg'
    }, {
        name: 'Billing',
        icon: 'icons/sidebar_icons/billing.svg'
    }, {
        name: 'Affiliate Program',
        icon: 'icons/sidebar_icons/aff.svg'
    }, {
        name: 'Settings',
        icon: 'icons/sidebar_icons/settings.svg'
    }, {
        name: 'FAQ',
        icon: 'icons/sidebar_icons/faq.svg'
    }, {
        name: 'Support',
        icon: 'icons/sidebar_icons/support.svg'
    }
]

const Sidebar = () => {
    const [activeRoute, setActiveRoute] = React.useState('Home'); 

    const handleRouteClick = (routeName: string) => {
        setActiveRoute(routeName);
    };

    return (
        <div className='dashboard_sidebar'>
            {sidebar_routes.map((route, index) => {
                return(
                    <div 
                        key={index}
                        onClick={() => handleRouteClick(route.name)}
                        style={{
                            backgroundColor: activeRoute === route.name ? '#eef6ff' : '#fff', 
                            borderRadius: '6px',
                            color: activeRoute === route.name ? '#3e97ff' : '#6a6a6a', 
                            fontSize: '14px', 
                            fontWeight: '600', 
                            display: 'flex', 
                            alignItems:'center', 
                            padding: '8px 6px',
                            cursor: 'pointer'
                        }}
                    >
                        <img src={route.icon} style={{marginRight: 10}}/>
                        {route.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar