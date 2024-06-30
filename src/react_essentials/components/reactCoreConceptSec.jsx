import { CORE_CONCEPTS, EXAMPLES } from "../data";

function CoreConcept(props) {
  return (
    <li id={props.id}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
export default function ConceptComponentsUl() {
  let conceptComponentsAssemble = [];

  for (let i = 0; i < CORE_CONCEPTS.length; i++) {
    conceptComponentsAssemble.push(
      <CoreConcept key={i} {...CORE_CONCEPTS[i]} id={i} />
    );
  }
  return <ul>{conceptComponentsAssemble}</ul>;
}
