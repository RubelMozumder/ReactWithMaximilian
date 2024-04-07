import PropTypes from 'prop-types';
//import reactCoreConceptpng from 'react-core-concepts.png';
import './Header.css';

const reactDescriptors = [
  'Fundamental',
  'Component-based',
  'Declarative',
  'Learn Once, Write Anywhere',
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header({h1_title="React Essentials", 
                                p_desc="React concepts you will need for almost any app you are going to build!"}) {
  const rendDesc = reactDescriptors[genRandomInt(reactDescriptors.length)];


  return (
    <header>
      <img src={'react-core-concepts.png'} alt="Stylized atom" />
      <h1>React {h1_title}</h1>
      <p>{rendDesc} {p_desc}</p>
    </header>
  );
}

Header.defaultProps = {
  h1_title: "Essentials",
  p_desc: "React concepts you will need for almost any app you are going to build!"
}

Header.propTypes = {
  h1_title: PropTypes.string,
  p_desc: PropTypes.string
}

