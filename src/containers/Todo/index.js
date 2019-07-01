import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodoList, deleteItemSuccess, deleteItemFail, deleteItemStart } from './actions';
import { ItemTodo } from './itemTodo';
import { getTodosState, getTodosErrorState } from './selectors'
import { getRoleState } from '../Login/selectors'
import { TodoForm } from './form';
import { deleteTodoItemApi } from './services';

const mapStateToProps = (state) => ({
    role: getRoleState(state),
    todos: getTodosState(state),
    error: getTodosErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadTodoList: () => dispatch(loadTodoList()),
    deleteTodoItemStart: () => dispatch(deleteItemStart()),
    deleteTodoItemSuccess: (values) => dispatch(deleteItemSuccess(values.data)),
    deleteTodoItemFail: (error) => dispatch(deleteItemFail(error))
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
        this.props.loadTodoList()
    }

    handleAddTodo(data) {
        console.log(data)
        // TODO: написать запрос для создания новой записи. Дата вся есть
    }

    handleEditSubmit(data, id) {
        console.log(data, id)
        // TODO: написать запрос для сохранения. Дата и id все есть
    }

    handleDelete(id) {
        const { todos } = this.props;

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