import React from "react";
import { Box, Button, TextField } from "@mui/material";

const SearchBar = ({ setFindWord, findWord, setSelectedWord }) => {
  const handleFindWordChange = (word) => {
    setFindWord(word);
  };

  const handleClearWord = () => {
    setFindWord("");
    setSelectedWord(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        p: 2,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "85%",
        flexShrink: 0,
        minHeight: "50px",
        maxWidth: "40vw",
        borderRadius: "18px",
      }}
    >
      <TextField
        id="filled-basic"
        label="Find:"
        variant="filled"
        onChange={(e) => handleFindWordChange(e.target.value)}
        value={findWord}
        sx={{ width: "55%", height: "100%" }}
      />
      <Button
        variant="contained"
        onClick={handleClearWord}
        size="large"
        sx={{ fontSize: "18px", fontWeight: "500" }}
      >
        Clear
      </Button>
    </Box>
  );
};

export default SearchBar;
