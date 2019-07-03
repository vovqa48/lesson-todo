import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import { Link } from "react-router-dom";
import { TodoForm } from './form';
import { isAdmin } from '../../services/helper';
import { updateItem } from './actions';
import './style.scss';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    changeValue: (formName, path, value) => dispatch(change(formName, path, value)),
    updateTodoItem: (id, values, resolveReject) => dispatch(updateItem(id, values, resolveReject))
});


class ItemTodoContainer extends Component {
    state = {
        isOpen: false
    }

    handleEdit() {
        const { title, description, changeValue } = this.props;

        this.setState({
            isOpen: !this.state.isOpen
        })

        changeValue('todo', 'title', title)
        changeValue('todo', 'description', description)
    }

    handleEditSubmit = (values) => {
        const { id } = this.props;
        return new Promise((resolve, reject) => {
            this.props.updateTodoItem(id, values, { resolve, reject });
        })
    }


    render() {
        const { id, title, description, createdBy, role, handleDelete } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="todo__wrap">
                <div className="todo__title"><Link to={`/todo/${id}`}>{title}</Link></div>
                <div className="todo__description">{description}</div>
                <div className="todo__createdBy">{createdBy}</div>
                {
                    (createdBy === role || isAdmin(role)) && 
                        <div>
                            <button onClick={() => this.handleEdit()}>Edit</button>
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                }
                {
                    isOpen &&
                       <TodoForm
                            onSubmit={this.handleEditSubmit}
                        />
                }
            </div>
        )
    }
}

export const ItemTodo = connect(mapStateToProps, mapDispatchToProps)(ItemTodoContainer)
