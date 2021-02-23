import {Link} from 'react-router-dom';


export default function About() {
    return (
        <div>
           <h4 style={Styling}>Version 1.0.0</h4> 
           <Link to="/" style={LinkStyling}>Go Back</Link>
        </div>
    )
}

const Styling = {
    textAlign:'center',
    paddingTop:'10px'
}

const LinkStyling = {
    textAlign:'center',
    textDecoration:'none',
    color:'purple',
    display:'block'
}