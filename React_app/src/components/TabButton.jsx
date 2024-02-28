import PropTypes from 'prop-types';
import "./TabButton.css"

export default function TabButton({ children }) {
    return (
        <li className='example'>
            <button onClick={()=>
                console.log('clicked')}>
            {children}</button>
        </li>
    );
}

TabButton.propTypes = {
    children: PropTypes.string.isRequired
}