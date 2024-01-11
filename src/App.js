import WordFinder from "./components/WordFinder";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <WordFinder />
    </div>
  );
}

export default App;
