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
  function handleClickFunc(selectedTopic, setContent) {
    setContent(selectedTopic);
  }
  console.log("int desc ", initDesc);
  return (
    <>
      <menu id="tab-menu">
        <TabButton
          isSelected={contentName === "conponents"}
          handleClick={() => handleClickFunc("components", setContent)}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={contentName === "jsx"}
          handleClick={() => handleClickFunc("jsx", setContent)}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={contentName === "props"}
          handleClick={() => handleClickFunc("props", setContent)}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={contentName === "state"}
          handleClick={() => handleClickFunc("state", setContent)}
        >
          State
        </TabButton>
      </menu>
      {!contentName && (
        <TabContent title="" description={initDesc} code=""></TabContent>
      )}
      {contentName && <TabContent {...EXAMPLES[contentName]}></TabContent>}
    </>
  );
}
