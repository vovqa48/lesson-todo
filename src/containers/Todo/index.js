import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    deleteItemSuccess, 
    deleteItemFail, 
    deleteItemStart,
    addItemStart,
    addItemSuccess,
    addItemFail,
    updateItemSuccess,
    updateItemFail,
    updateItemStart,
    loadTodoListStart,
    loadTodoListSuccess,
    loadTodoListFail
} from './actions';
import { ItemTodo } from './itemTodo';
import { getTodosState, getTodosErrorState } from './selectors'
import { getRoleState } from '../Login/selectors'
import { TodoForm } from './form';
import { deleteTodoItemApi, addTodoItemApi, updateTodoItemApi, loadTodoListApi } from './services';

const mapStateToProps = (state) => ({
    role: getRoleState(state),
    todos: getTodosState(state),
    error: getTodosErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadTodoListStart: () => dispatch(loadTodoListStart()),
    loadTodoListSuccess: (values) => dispatch(loadTodoListSuccess(values.data)),
    loadTodoListFail: (error) => dispatch(loadTodoListFail(error)),
    deleteTodoItemStart: () => dispatch(deleteItemStart()),
    deleteTodoItemSuccess: (values) => dispatch(deleteItemSuccess(values.data)),
    deleteTodoItemFail: (error) => dispatch(deleteItemFail(error)),
    addTodoItemStart: () => dispatch(addItemStart()),
    addTodoItemSuccess: (values) => dispatch(addItemSuccess(values.data)),
    addTodoItemFail: (error) => dispatch(addItemFail(error)),
    updateTodoItemStart: () => dispatch(updateItemStart()),
    updateTodoItemSuccess: (values) => dispatch(updateItemSuccess(values.data)),
    updateTodoItemFail: (error) => dispatch(updateItemFail(error))
});

export class TodoContainer extends Component {
    state = {
        isOpen: false
    }

    componentDidMount() {
        const { todos } = this.props;

        if(!todos.length) {
            this.loadData();
        }
    }
    
    loadData() {
        this.props.loadTodoListStart();
        return loadTodoListApi()
            .then(this.props.loadTodoListSuccess)
            .catch(this.props.loadTodoListFail)
    }

    handleAddTodo(data) {
        this.props.addTodoItemStart();
        return addTodoItemApi(data)
            .then( 
                (res) => {
                    this.props.addTodoItemSuccess(res);
                    this.loadData();
                }
            )
            .catch(this.props.addTodoItemFail)
    }

    handleEditSubmit(data, id) {
        this.props.updateTodoItemStart();
        return updateTodoItemApi(id, data)
            .then( 
                (res) => {
                    this.props.updateTodoItemSuccess(res);
                    this.loadData();
                }
            )
            .catch(this.props.updateTodoItemFail)
    }

    handleDelete(id) {
        this.props.deleteTodoItemStart();
        return deleteTodoItemApi(id)
            .then( 
                (res) => {
                    this.props.deleteTodoItemSuccess(res);
                    this.loadData();
                }
            )
            .catch(this.props.deleteTodoItemFail)
    }

    render() {
        const { todos, error, role } = this.props;
        const { isOpen } = this.state;

        if(error !== null) {
            return (
                <div>
                    {error}
                </div>
            )
        }

        return (
            <div>
                <h1>Todos list</h1>
                <div style={{ marginBottom: 24 }}>
                    <button onClick={() => this.setState({ isOpen: !this.state.isOpen })}>{ isOpen ? 'Close' : 'Add todo' }</button>
                    {
                        isOpen &&
                        <TodoForm
                            customSubmit={(data) => this.handleAddTodo(data)}
                        />
                    }
                </div>

                {
                    todos.map((todo) => 
                        <ItemTodo 
                            key={todo.id} 
                            id={todo.id} 
                            title={todo.title} 
                            description={todo.description} 
                            createdBy={todo.createdBy}
                            role={role}
                            handleEditSubmit={(data, id) => this.handleEditSubmit(data, id)}
                            handleDelete={(id) => this.handleDelete(id)}
                        />
                    )
                }
            </div>
        )
    }
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoContainer)