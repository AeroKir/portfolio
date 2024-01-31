import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../assets/icons/logo-v4.svg';

import './Logo.css';

function Logo(props) {
    return (
        <NavLink to="/" className="logo-link">
            <img src={LogoIcon} alt="Logo image" className="logo logo-is-not-main-page" />
        </NavLink>
    )
}

Logo.propTypes = {};

export default Logo;
