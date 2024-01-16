import React, { useState } from "react";
import SearchBar from "./SearchBar";

import { Container } from "@mui/system";
import WordList from "./WordList";
import { wordsLarge } from "../data/wordsListLarge";

const WordFinderBox = () => {
  const [findWord, setFindWord] = useState("");
  const [selectedWord, setSelectedWord] = useState(null);

  return (
    <div
      style={{
        resize: "both",
        minWidth: "500px",
        minHeight: "600px",
        maxWidth: "90vw",
        maxHeight: "80vh",
        overflow: "hidden",
        backgroundColor: "#23272a",
        borderRadius: "10px",
        boxShadow: "0 0 14px black",
        padding: "36px",
      }}
    >
      <Container
        sx={{
          bgcolor: "#23272a",
          p: 2,
          minWidth: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar
          setFindWord={setFindWord}
          findWord={findWord}
          setSelectedWord={setSelectedWord}
        />
        <WordList
          searchWord={findWord}
          selectedWord={selectedWord}
          setSelectedWord={setSelectedWord}
          words={wordsLarge}
        />
      </Container>
    </div>
  );
};

export default WordFinderBox;
