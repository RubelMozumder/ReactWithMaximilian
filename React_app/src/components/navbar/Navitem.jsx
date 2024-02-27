import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';

export default function Navitem({...props}) {
    let clsName;
    if (props.className in props) {
        clsName = props.className;
    } else {
        clsName = 'navItem';
    }

    return(
    <li>
        <NavLink className={clsName} to={props.href} >{props.navitem}</NavLink>
        {/* <a href={props.href}>{props.navItem}</a> */}
    </li>
    )
}

Navitem.propTypes = {
    // children: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    navitem: PropTypes.string.isRequired
};
