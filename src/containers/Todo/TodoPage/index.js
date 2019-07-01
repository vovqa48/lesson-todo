import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistoryState } from '../../App/selectors';

const mapStateToProps = (state) => ({
    history: getHistoryState(state)
});

const mapDispatchToProps = (dispatch) => ({

});

export class TodoPageContainer extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Todo Page</h1>
            </div>
        )
    }
}

export const TodoPage = connect(mapStateToProps, mapDispatchToProps)(TodoPageContainer)