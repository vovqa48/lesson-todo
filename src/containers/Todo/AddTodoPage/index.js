import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodoForm } from './AddTodoForm';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export class AddTodoPageContainer extends Component {

    handleSubmit(values) {
        /*this.props.loginUserStart();
        return loginAPI(values)
            .then(this.props.loginUserSuccess)
            .catch(this.props.loginUserFail)*/
    }

    render() {
        return (
            <div>
                <h1>Add Todo Page</h1>

                <AddTodoForm 
                    customSubmit={(values) => this.handleSubmit(values)}
                />
            </div>
        )
    }
}

export const AddTodoPage = connect(mapStateToProps, mapDispatchToProps)(AddTodoPageContainer)