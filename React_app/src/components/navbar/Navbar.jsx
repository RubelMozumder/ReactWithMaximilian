
import Navitem  from './Navitem.jsx';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    console.log('###### Log massage ##### : Navbar');
    return(
        <div className='nav-header'>
            <nav className='nav-container'>
                <Link href='/' />
                <div className='nav-menu'>
                    <ul>
                        <Navitem href='/Reactpage' navitem="Home" />
                        <Navitem href='/TicTacToe' navitem="TicTacToe" />
                    </ul>
                </div>
            </nav>
        </div>
    )
}    