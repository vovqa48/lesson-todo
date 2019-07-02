import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistoryState, getLoadingStatusState } from '../../App/selectors';
import { getTodoState, getTodosErrorState } from '../selectors';
import { loadTodoApi } from '../services';
import { getItemSuccess, getItemFail, getItemStart } from '../actions';

const mapStateToProps = (state) => ({
    history: getHistoryState(state),
    todo: getTodoState(state),
    isLoading: getLoadingStatusState(state),
    error: getTodosErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadTodoStart: () => dispatch(getItemStart()),
    loadTodoSuccess: (values) => dispatch(getItemSuccess(values.data)),
    loadTodoFail: (error) => dispatch(getItemFail(error)),
});

export class TodoPageContainer extends Component {

    componentDidMount() {
        const { todo } = this.props;
        const todoId = this.props.computedMatch.params.id

        if(todo.length === 0 && todoId.length) {
            this.loadData(todoId);
        }
    }

    loadData(todoId) {
        this.props.loadTodoStart();
        return loadTodoApi(todoId)
            .then(this.props.loadTodoSuccess)
            .catch(this.props.loadTodoFail)
    }

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