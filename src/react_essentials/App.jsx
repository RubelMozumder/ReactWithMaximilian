import Header from "./components/header";
import { ExampleContents } from "./components/exampleContents";
import ConceptComponentsUl from "./components/reactCoreConceptSec";
// function CoreConcept(props) {
//   return (
//     <li id={props.id}>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
// function ConceptComponentsUl({ conceptList }) {
//   let conceptComponentsAssemble = [];

//   for (let i = 0; i < conceptList.length; i++) {
//     conceptComponentsAssemble.push(
//       <CoreConcept key={i} {...conceptList[i]} id={i} />
//     );
//   }
//   return <ul>{conceptComponentsAssemble}</ul>;
// }

// console.log(" Hello ", ConceptComponents);
// export default () => {
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
