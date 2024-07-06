import Header from "../components/header";
import reactImg from "../assets/react-core-concepts.png";
function DeepDivePage() {
  const headDesc = `An interesting game for two players having a unique sign for each. Each player gives his tern alternatively.`;

  return (
    <div>
      <Header
        headH1="Tic-Tac-Toe"
        headDesc={headDesc}
        headImg={reactImg}
        imgAlt="Stylezed atom"
      />
    </div>
  );
}

export default DeepDivePage;
