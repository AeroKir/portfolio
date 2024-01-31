import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Logo from '../components/logo/Logo';
import MainNavMenu from '../components/menu/MainNavMenu';

function MainLayout(props) {
    return (
        <div>
            <Logo />
            <main>
                <Outlet />
            </main>
            <MainNavMenu />
        </div>
    )
}

MainLayout.propTypes = {}

export default MainLayout;
