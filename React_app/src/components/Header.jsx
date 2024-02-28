import reactCoreConcept from "../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptors = ['Fundamental', 'Component-based', 'Declarative', 'Learn Once, Write Anywhere']
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
    const rendDesc = reactDescriptors[genRandomInt(reactDescriptors.length)]
  
    return (
      <header>
        <img src={reactCoreConcept} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {rendDesc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  } 
  