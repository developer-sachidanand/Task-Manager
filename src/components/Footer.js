import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <p> Copyright &copy; 2021</p> 
            <Link style={LinkStyling} to="/about">About</Link>
        </footer>
    )
}


const LinkStyling = {
    textAlign:'center',
    textDecoration:'none',
    color:'purple'
}