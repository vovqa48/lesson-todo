import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadUsersListApi } from './services';
import { ItemUser } from './itemUser';
import { getUsersState, getUsersErrorState } from './selectors';
import { getRoleState } from '../Login/selectors';
import { loadUsersListSuccess, loadUsersListFail, loadUsersListStart } from './actions';

const mapStateToProps = (state) => ({
    role: getRoleState(state),
    users: getUsersState(state),
    error: getUsersErrorState(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadUsersListStart: () => dispatch(loadUsersListStart()),
    loadUsersListSuccess: (values) => dispatch(loadUsersListSuccess(values.data)),
    loadUsersListFail: (error) => dispatch(loadUsersListFail(error)),
});

export class UsersListContainer extends Component {
    componentDidMount() {
        const { users } = this.props;

        if(!users.length) {
            this.loadData();
        }
    }
    
    loadData() {
        this.props.loadUsersListStart();
        return LoadUsersListApi()
            .then(this.props.loadUsersListSuccess)
            .catch(this.props.loadUsersListFail)
    }

    render() {
        const { users, error } = this.props;

        if(error !== null) {
            return (
                <div>
                    {error}
                </div>
            )
        }

        return (
            <div>
                <h1>Users list</h1>
                {
                    users.map((user, index) => 
                        <ItemUser 
                            key={index} 
                            login={user.login} 
                            role={user.role} 
                            name={user.name} 
                        />
                    )
                }
            </div>
        )
    }
}

export const UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersListContainer)