import React from 'react'
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div className="container height-100 d-flex justify-content-center align-items-center">
            <div className="position-relative">
                <div className="card p-2 text-center">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout
