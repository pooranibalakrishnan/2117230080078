import { useState } from "react";

import { Container, Typography } from "@mui/material";

import FilterBar from "./components/FilterBar";

import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  const [selectedType, setSelectedType] =
    useState("");

  return (
    <Container>
      <Typography
        variant="h2"
        align="center"
        sx={{
          marginTop: 4,
          fontWeight: "bold",
        }}
      >
        Affordmed Notification System
      </Typography>

      <FilterBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <PriorityNotifications
        selectedType={selectedType}
      />

      <AllNotifications
        selectedType={selectedType}
      />
    </Container>
  );
}

export default App;