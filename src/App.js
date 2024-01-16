import WordFinderBox from "./components/WordFinderBox";

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
      <WordFinderBox />
    </div>
  );
}

export default App;
