import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';


export default class PlayerList extends React.Component {
    renderPlayers () {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Please enter player names down below</p>
                </div>
            )
        } else {
            return this.props.players.map((player) => <Player key={player._id} player={player} />); 
        }
            
    }
    render() {
        return (
            <div>
                <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)" maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
};