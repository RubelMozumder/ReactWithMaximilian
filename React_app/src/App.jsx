import { CORE_CONCEPTS } from "./data.js";
import "./App.css";

import Header from "./components/Header.jsx";
import ReactConcept from "./components/ReactConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div id="root">
      <header>
        <h1>Shaurika Mozumder</h1>
      </header>
      <Header />
      <main>  
        <section id="core_concepts">
          <ul>
            <ReactConcept {...CORE_CONCEPTS[0]} />
            <ReactConcept {...CORE_CONCEPTS[1]} />
            <ReactConcept {...CORE_CONCEPTS[2]} />
            <ReactConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <manu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </manu>
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
export { ReactConcept };
