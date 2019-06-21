import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodoList } from './actions';
import { ItemTodo } from './itemTodo';

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
    loadTodoList: () => dispatch(loadTodoList())
});

export class TodoContainer extends Component {
    componentDidMount() {
        this.loadData();
    }
    
    loadData() {
        this.props.loadTodoList()
    }

    render() {
        const { todos } = this.props;

        return (
            <div>
                <h1>Todos list</h1>
                {
                    todos.map((todo) => 
                        <ItemTodo 
                            key={todo.id} 
                            title={todo.title} 
                            description={todo.description} 
                            createdBy={todo.createdBy} 
                        />
                    )
                }
            </div>
        )
    }
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoContainer)