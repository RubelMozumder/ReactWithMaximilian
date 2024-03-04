import { Fragment } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import ReactConcept from './components/ReactConcept.jsx';
import CoreConcepts from './components/reactConcept/CoreConcepts.jsx';
import ConceptExample from './components/conceptExample/ConceptExample.jsx';

function App() {
  return (
    <Fragment>
      <div id="root">
        <header>
          <h1>Shaurika Mozumder</h1>
        </header>
        <Header />
        <main>
          <CoreConcepts />
          <ConceptExample />
        </main>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </Fragment>
  );
}

export default App;
export { ReactConcept };
