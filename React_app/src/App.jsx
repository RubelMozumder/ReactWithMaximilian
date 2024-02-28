import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import './App.css';

import Header from './components/Header.jsx';
import ReactConcept from './components/ReactConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [concept, setConcept] = useState('');

  const resetConcept = (concept) => setConcept(concept);
  return (
    <div id="root">
      <header>
        <h1>Shaurika Mozumder</h1>
      </header>
      <Header />
      <main>
        <section id="core_concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <ReactConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2 style={{ color: '#ffffff' }}>Examples</h2>
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
        </section>
        {/* <reactConcept title="Learn Once, Write Anywhere" img={reactLogo} concept="Learn Once, Write Anywhere" />
        <reactConcept title="Fundamental" img={reactLogo} concept="Fundamental" /> */}
      </main>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
export { ReactConcept };
