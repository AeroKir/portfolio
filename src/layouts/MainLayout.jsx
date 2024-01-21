import React from 'react';
import PropTypes from 'prop-types';
import MainNavMenu from '../components/menu/MainNavMenu';

function MainLayout(props) {
    return (
        <div>
            <main>
                <div>content</div>
            </main>
            <MainNavMenu />
        </div>
    )
}

MainLayout.propTypes = {}

export default MainLayout;
