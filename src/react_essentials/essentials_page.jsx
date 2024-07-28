import Header from "../components/header";
import reactImg from "../assets/react-core-concepts.png";

import { ExampleContents } from "./components/exampleContents";
import ConceptComponentsUl from "./components/coreConcepts";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genInd(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Essentials() {
  const headDesc =
    reactDescriptions[genInd(3)] +
    "React concepts you will need for almost any app you are going to build!";
  return (
    <div>
      <Header
        headH1="React Essentials"
        headImg={reactImg}
        imgAlt="Stylezed Atoms"
        headDesc={headDesc}
      />
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
