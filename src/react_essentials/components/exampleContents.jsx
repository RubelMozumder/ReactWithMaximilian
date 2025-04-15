import { EXAMPLES } from "../data";
import { useState } from "react";

function TabButton({ children, handleClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}

function TabContent({ title, description, code }) {
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <code>{code}</code>
    </div>
  );
}

export function ExampleContents() {
  const [contentName, setContent] = useState(null);

  let initDesc = "Choose a React concept name.";
  const tabTag = ["components", "jsx", "props", "state"]

  function handleClickFunc(selectedTopic, setContent) {
    setContent(selectedTopic);
  }
  return (
    <>
      <menu id="tab-menu">
        {tabTag.map((tag) => (<TabButton key={tag} 
                                  isSelected={contentName==tag} 
                                  handleClick={() => handleClickFunc(tag, setContent)} 
                                  children={tag}/>))}
        
      </menu>
      {/* Tab contents */} 
      {!contentName && (
        <TabContent title="" description={initDesc} code=""></TabContent>
      )}
      {contentName && <TabContent {...EXAMPLES[contentName]}></TabContent>}
    </>
  );
}
