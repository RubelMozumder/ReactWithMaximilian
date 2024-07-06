import Header from "./components/header";
import { ExampleContents } from "./components/exampleContents";
import ConceptComponentsUl from "./components/coreConcepts";

function Essentials() {
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

export default Essentials;
