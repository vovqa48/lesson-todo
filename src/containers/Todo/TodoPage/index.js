import React, { Component } from 'react';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export class TodoPageContainer extends Component {
    render() {
        return (
            <div>
                <h1>Todo Page</h1>
            </div>
        )
    }
}

export const TodoPage = connect(mapStateToProps, mapDispatchToProps)(TodoPageContainer)