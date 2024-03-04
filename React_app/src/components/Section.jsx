import PropTypes from 'prop-types';

export default function Section({ children, h2_title, ...props }) {
    return(
    <section {...props}>
        <h2 style={{color: '#ffffff'}}>{h2_title}</h2>
        {children}
    </section>
    )
}

Section.propTpyes = {
    children: PropTypes.node.isRequired,
    h2_text: PropTypes.string.isRequired,
}