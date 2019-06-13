import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    name: state.user.name
});

const mapDispatchToProps = (dispatch) => ({

});

class HomeContainer extends Component {
    render() {
        const { name } = this.props;

        return (
            <div>
                <h1>Hello, {name}!</h1>
            </div>
        )
    }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

