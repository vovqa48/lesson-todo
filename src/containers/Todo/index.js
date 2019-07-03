import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadTodoList,
    deleteItem,
    addItem
} from './actions';
import { ItemTodo } from './itemTodo';
import { getTodosState, getTodosErrorState } from './selectors'
import { getRoleState } from '../Login/selectors'
import { TodoForm } from './form';

const mapStateToProps = (state) => ({
    role: getRoleState(state),
    todos: getTodosState(state),
    error: getTodosErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadTodoList: () => dispatch(loadTodoList()),
    deleteItem: (id) => dispatch(deleteItem(id)),
    addTodoItem: (values, resolveReject) => dispatch(addItem(values, resolveReject)),
});

export class TodoContainer extends Component {
    state = {
        isOpen: false
    }

    componentDidMount() {
        this.loadData();
    }
    
    loadData() {
        this.props.loadTodoList();
    }

    handleAddTodo = values => 
        new Promise((resolve, reject) => {
            this.props.addTodoItem(values, { resolve, reject });
        })

    handleDelete(id) {
        this.props.deleteItem(id);
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
                            onSubmit={this.handleAddTodo}
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
                            handleDelete={(id) => this.handleDelete(id)}
                        />
                    )
                }
            </div>
        )
    }
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoContainer)