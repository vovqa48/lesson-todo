import React, { Component } from 'react'
import './style.scss';

export class ItemUser extends Component {

    render() {
        const { login, role, name } = this.props;

        return (
            <div className="user__wrap">
                <div className="user__login">Login: {login}</div>
                <div className="user__role">Role: {role}</div>
                <div className="user__name">Name: {name}</div>
            </div>
        )
    }
}
