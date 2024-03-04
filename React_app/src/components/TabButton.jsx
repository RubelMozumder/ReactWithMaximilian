import PropTypes from 'prop-types';
import './TabButton.css';

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li className="example-btn">
      <button className={isSelected ? 'active' : null} {...props}>
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
