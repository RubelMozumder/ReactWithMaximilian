import Header from "../components/header";
import reactImg from "../assets/react-core-concepts.png";
import BoardContainerWithPlayerSubContainer from "./components/player_sub_container";
// import BoardContainerWithPlayerSubContainer from "./components/sub_player_container";
import "./tic_tac_toe.css";
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
      <div id="top-board-container">
        <h2>H" text</h2>
        <BoardContainerWithPlayerSubContainer />
      </div>
    </div>
  );
}

export default DeepDivePage;
