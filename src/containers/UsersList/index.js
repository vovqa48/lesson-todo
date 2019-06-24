import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadUsersList } from './actions';
import { ItemUser } from './itemUser';

const mapStateToProps = (state) => ({
    role: state.user.role,
    users: state.users.users,
    error: state.users.error
});

const mapDispatchToProps = (dispatch) => ({
    LoadUsersList: () => dispatch(LoadUsersList())
});

export class UsersListContainer extends Component {
    componentDidMount() {
        const { users } = this.props;

        if(!users.length) {
            this.loadData();
        }
    }
    
    loadData() {
        this.props.LoadUsersList()
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