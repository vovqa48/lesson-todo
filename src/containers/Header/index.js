import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { TODO, USERS } from '../../constants/routs';
import { isAdmin } from '../../services/helper';
import './style.scss';

export class Header extends Component {
    static propTypes = {
        name: PropTypes.string,
        role: PropTypes.string,
        isAuth: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuth, logout, name, role } = this.props;

        if (!isAuth) {
            return (
                <div className="layout__header">
                    Please login
                </div>
            )
        }

        const UsersListLink = () => {
            if( isAdmin(role) ) {
                return(
                    <li className="layout__header__menu-item">
                        <Link to={USERS} className="link">Users List</Link>
                    </li>
                );
            }
            return null;
        } 

        return (
            <div className="layout__header">
                <ul className="layout__header__menu">
                    <li className="layout__header__menu-item">
                        <Link to={TODO} className="link">ToDo page</Link>
                    </li>
                    <UsersListLink />
                    <li className="layout__header__menu-item">
                        {name}
                    </li>
                    <li className="layout__header__menu-item">
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        )
    }
}
