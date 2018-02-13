import React from 'react';
import Titlebar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Titlebar title={this.props.title} subtitle={this.props.subtitle}/>
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <AddPlayer />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    players: PropTypes.array.isRequired
};