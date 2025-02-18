import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

interface AutoScrollingTextProps {
  words: string[];
}

const AutoScrollingText = ({ words }: AutoScrollingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Intervalle de 1 seconde

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <Box sx={{ height: "40px", overflow: "hidden" }}>
      <Box
        sx={{
          mt: `-${currentIndex * 40}px`,
          transition: "margin-top 0.5s ease",
        }}
      >
        {words.map((word, index) => (
          <Box
            key={index}
            sx={{
              fontSize: 22,
              height: "40px",
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            {word}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AutoScrollingText;
