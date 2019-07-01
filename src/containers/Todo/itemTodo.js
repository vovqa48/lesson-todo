import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import { Link } from "react-router-dom";
import { TodoForm } from './form';
import { isAdmin } from '../../services/helper';
import './style.scss';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    changeValue: (formName, path, value) => dispatch(change(formName, path, value))
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


    render() {
        const { id, title, description, createdBy, role, handleEditSubmit, handleDelete } = this.props;
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
                            customSubmit={(values) => handleEditSubmit(values, id)}
                        />
                }
            </div>
        )
    }
}

export const ItemTodo = connect(mapStateToProps, mapDispatchToProps)(ItemTodoContainer)
