import Section from "../../Section.jsx"
import TabButton from "../../TabButton.jsx"
import { useState } from 'react';
import { EXAMPLES } from '../../../data.js';
import './ConceptExample.css';

export default function ConceptExample (){

  const [concept, setConcept] = useState('');

  const resetConcept = (concept) => setConcept(concept);
  return (
    <Section id="examples" h2_title ="Examples">
      <ul>
        <TabButton
          isSelected={concept === 'components' ? true : false}
          onClick={() => resetConcept('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={concept === 'jsx' ? true : false}
          onClick={() => resetConcept('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={concept === 'props' ? true : false}
          onClick={() => resetConcept('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={concept === 'state' ? true : false}
          onClick={() => resetConcept('state')}
        >
          State
        </TabButton>
    </ul>
    <div id="tab-content">
        {!concept ? (
          <p>Please select a topic!</p>
        ) : (
          <div>
            <h3>{EXAMPLES[concept].title}</h3>
            <p>{EXAMPLES[concept].description}</p>
            <pre>
              <code>{EXAMPLES[concept].code}</code>
            </pre>
          </div>
        )}
      </div>
    </Section>
  );
}