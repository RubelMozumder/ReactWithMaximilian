import PropTypes from 'prop-types';
import './TabButton.css';

export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li className="example-btn">
      <button className={isSelected ? 'active' : null} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
