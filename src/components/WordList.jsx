import React from "react";
import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";

const WordList = ({ searchWord, setSelectedWord, selectedWord, words }) => {
  const handleListItemClicked = (index) => {
    setSelectedWord(index);
  };

  const filteredWords =
    searchWord === ""
      ? words
      : words.filter((word) => word.includes(searchWord));

  const Item = ({ index, style }) => {
    return (
      <div style={style} key={index}>
        <ListItem
          disablePadding
          sx={{
            boxSizing: "border-box",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
          }}
        >
          <ListItemButton
            selected={selectedWord === index}
            onClick={() => handleListItemClicked(index)}
            sx={{
              fontSize: 20,
              fontWeight: 500,
              color: "black",

              "&.Mui-selected": {
                backgroundColor: "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "white",
                },
              },
              "&:hover": {
                backgroundColor: "#4ba3d9",
                color: "white",
              },
            }}
          >
            {filteredWords[index]}
          </ListItemButton>
        </ListItem>
      </div>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxHeight: "55vh",
        bgcolor: "#7a8085",
        mt: 5,
        p: 1,
        boxSizing: "border-box",
        borderRadius: 3,
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        backgroundColor="white"
        textAlign="center"
        borderRadius={3}
        variant="h5"
        style={{ marginBottom: "8px", fontWeight: "600" }}
      >
        {filteredWords.length === 0
          ? `0 words containing ${searchWord}`
          : `${filteredWords.length} words total`}
      </Typography>
      <FixedSizeList
        height={450}
        width="100%"
        itemSize={50}
        itemCount={filteredWords.length}
        overscanCount={25}
      >
        {Item}
      </FixedSizeList>
    </Box>
  );
};

export default WordList;
