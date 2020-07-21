import React from 'react'

import './sideMenu.css'

const SideMenu = () => {
    return (
        <div className="app-side-menu">
            <div className="box-side-menu">
                <div className="group-box-menu">
                    <div className="listContentMenu">
                        São Paulo
                        <span>
                            São Paulo
                        </span>
                    </div>
                    <div className="listContentMenu">
                        Rio de Janeiro
                        <span>
                            Rio de Janeiro
                        </span>
                    </div>
                    <div className="listContentMenu">
                        Paraná
                    </div>
                    <div className="listContentMenu">
                        Bahia
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu