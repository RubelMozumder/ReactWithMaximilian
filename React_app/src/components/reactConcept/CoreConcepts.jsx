import Section from '../Section.jsx';
import { CORE_CONCEPTS } from '../../data.js';
import ReactConcept from '../ReactConcept.jsx';

export default function CoreConcepts() {
return(
    <Section id="core_concepts" h2_title="Core Concepts">
        <ul>
        {CORE_CONCEPTS.map((concept) => (
            <ReactConcept key={concept.title} {...concept} />
        ))}
        </ul>
    </Section>)
}
