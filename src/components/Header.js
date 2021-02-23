import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom';

const Header = ({ title ,onAdd,showAddTask}) => {
    const Location = useLocation();

    return (
        <header className="header">
            

            {Location.pathname==='/about' ? <h1 style={headingStyle}>{title}</h1>:<h1>{title}</h1>}

            {Location.pathname === '/' && <Button color={showAddTask?'Red':'green'} text={showAddTask?'Close':'Add'}
             onClick={onAdd} />}
        </header>
    )
}

const headingStyle = {
    display:'block !important',
    color:'purple',
    textAlign:'center',
    marginLeft:'110px'
}

Header.defaultProps = {
    title : "Default Task Tracker"
}

Header.propTypes = {
    title:PropTypes.string.isRequired
}

export default Header
