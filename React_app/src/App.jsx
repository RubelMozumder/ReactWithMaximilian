import { CORE_CONCEPTS } from "./data.js";
import reactCoreConcept from "./assets/react-core-concepts.png";
import "./App.css";

const reactDescriptors = ['Fundamental', 'Component-based', 'Declarative', 'Learn Once, Write Anywhere']
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
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

function ReactConcept(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <img src={props.img} alt="React logo" />
      <p>{props.concept}</p>
    </li>
  );
}


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div id="root">
      <Header />
      <main>  
        <section id="core_concepts">
          <ul>
            <ReactConcept title={CORE_CONCEPTS[0].title} 
                          img={CORE_CONCEPTS[0].image} 
                          concept={CORE_CONCEPTS[0].description} />
            <ReactConcept title={CORE_CONCEPTS[1].title} 
                          img={CORE_CONCEPTS[1].image} 
                          concept={CORE_CONCEPTS[1].description} />
            <ReactConcept title={CORE_CONCEPTS[2].title} 
                          img={CORE_CONCEPTS[2].image} 
                          concept={CORE_CONCEPTS[2].description} />
            <ReactConcept title={CORE_CONCEPTS[3].title} 
                          img={CORE_CONCEPTS[3].image} 
                          concept={CORE_CONCEPTS[3].description} />
          </ul>
        </section>

        {/* <reactConcept title="Learn Once, Write Anywhere" img={reactLogo} concept="Learn Once, Write Anywhere" />
        <reactConcept title="Fundamental" img={reactLogo} concept="Fundamental" /> */}
      </main>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
export { Header, ReactConcept };
