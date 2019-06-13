import React, { Component } from 'react'
import './style.scss';

export class ItemTodo extends Component {

    render() {
        const { title, description, createdBy } = this.props;

        return (
            <div className="todo__wrap">
                <div className="todo__title">{title}</div>
                <div className="todo__description">{description}</div>
                <div className="todo__createdBy">{createdBy}</div>
            </div>
        )
    }
}
