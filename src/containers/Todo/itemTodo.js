import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.scss';

export class ItemTodo extends Component {

    render() {
        const { id, title, description, createdBy } = this.props;

        return (
            <div className="todo__wrap">
                <div className="todo__title"><Link to={`/todo/${id}`}>{title}</Link></div>
                <div className="todo__description">{description}</div>
                <div className="todo__createdBy">{createdBy}</div>
            </div>
        )
    }
}
