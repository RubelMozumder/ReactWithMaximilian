import Header from "./react_essentials/components/header";
import { ExampleContents } from "./react_essentials/components/exampleContents";
import ConceptComponentsUl from "./react_essentials/components/reactCoreConceptSec";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ConceptComponentsUl />
        </section>
        <section id="examples">
          <h2>EXAMPLES</h2>
          <ExampleContents />
        </section>
      </main>
    </div>
  );
}

export default App;
