import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Home from "./Pages/Home";

function App() {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Home />
      </Box>
    </Container>
  );
}

export default App;
