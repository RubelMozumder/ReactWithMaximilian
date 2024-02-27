import React from 'react'
import Header from '../components/reactfundamental/header/Header.jsx'
import CoreConcepts from '../components/reactfundamental/reactConcept/CoreConcepts.jsx'
import ConceptExample from '../components/reactfundamental/conceptExample/ConceptExample.jsx'

export default function Reactpage() {

    return (
    <div>
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
  )
}
