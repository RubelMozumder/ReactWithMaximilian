import PropTypes from 'prop-types';

function Section({ children, h2_title, ...props }) {
    return(
    <section {...props}>
        <h2 style={{color: '#ffffff'}}>{h2_title}</h2>
        {children}
    </section>
    )
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    h2_title: PropTypes.string.isRequired,
    props: PropTypes.object
}

export default Section;