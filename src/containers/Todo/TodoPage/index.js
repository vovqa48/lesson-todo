import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistoryState, getLoadingStatusState } from '../../App/selectors';
import { getTodoState, getTodosErrorState } from '../selectors';
import { getItem } from '../actions';

const mapStateToProps = (state) => ({
    history: getHistoryState(state),
    todo: getTodoState(state),
    isLoading: getLoadingStatusState(state),
    error: getTodosErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    getTodoItem: (todoId) => dispatch(getItem(todoId))
});

export class TodoPageContainer extends Component {

    componentDidMount() {
        const todoId = this.props.computedMatch.params.id
        
        this.loadData(todoId);
    }

    loadData = (todoId) => 
        new Promise((resolve, reject) => {
            this.props.getTodoItem(todoId, { resolve, reject });
        })
    

    render() {
        const { todo, isLoading, error } = this.props;
        const todoId = this.props.computedMatch.params.id;

        if(error !== null) {
            return (
                <div>
                    {error}
                </div>
            )
        }

        if(todo.length === 0 && isLoading) {
            return (
                <div>
                    <h1>Todo Page {todoId}</h1>
                </div>
            )
        }

        return (
            <div>
                <h1>Todo Page {todoId}</h1>
                <div><b>Title:</b>{todo.title}</div>
                <div><b>Description:</b>{todo.description}</div>
                <div><b>Created By:</b>{todo.createdBy}</div>
            </div>
        )
    }
}

export const TodoPage = connect(mapStateToProps, mapDispatchToProps)(TodoPageContainer)