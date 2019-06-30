import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTodoList } from './actions';
import { ItemTodo } from './itemTodo';
import { getTodosState, getTodosErrorState } from './selectors'
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
    todos: getTodosState(state),
    error: getTodosErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadTodoList: () => dispatch(loadTodoList())
});

export class TodoContainer extends Component {
    componentDidMount() {
        const { todos } = this.props;

        if(!todos.length) {
            this.loadData();
        }
    }
    
    loadData() {
        this.props.loadTodoList()
    }

    render() {
        const { todos, error } = this.props;
        
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
                {
                    todos.map((todo) => 
                        <ItemTodo 
                            key={todo.id} 
                            id={todo.id} 
                            title={todo.title} 
                            description={todo.description} 
                            createdBy={todo.createdBy} 
                        />
                    )
                }

                <Link to='/todo/add'>Add todo</Link>

            </div>
        )
    }
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoContainer)