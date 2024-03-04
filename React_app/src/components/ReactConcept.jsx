import './ReactConcept.css';
export default function ReactConcept({ ...props }) {
  return (
    <li>
      <h2>{props.title}</h2>
      <img src={props.image} alt="React logo" />
      <p>{props.description}</p>
    </li>
  );
}
