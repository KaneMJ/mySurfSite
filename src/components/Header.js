import React from 'react';
import surfLineup from '../images/boardLineup.jpg';

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <img className="headerPic" src={surfLineup} />
            </div>
        )
    }
}

export default Header;