import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
const Header = (props) => {

    return (
        <header>
            
<Stats players={props.players}/>
 <h1>{ props.title }</h1>
 <Stopwatch />
 </header>
    )

}
Header.propTypes = {
    players: PropTypes.string, 
    title: PropTypes.arrayOf(PropTypes.object),
}
export default Header;
