import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { TODO, } from '../../constants/routs';
import './style.scss';

export class Header extends Component {
    static propTypes = {
        name: PropTypes.string,
        isAuth: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuth, logout, name } = this.props;

        if (!isAuth) {
            return (
                <div className="layout__header">
                    Please login
                </div>
            )
        }

        return (
            <div className="layout__header">
                <ul className="layout__header__menu">
                    <li className="layout__header__menu-item">
                        <Link to={TODO} className="link">ToDo page</Link>
                    </li>
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
