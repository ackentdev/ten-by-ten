import React from 'react';

const Games = ({title, id}) => <div className="game-row">
    <p className="game-title">{title}</p>
    <div className="game-meter"></div>
</div>

export default Games;