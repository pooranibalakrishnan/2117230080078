import { Button, Stack } from "@mui/material";

function FilterBar({
  selectedType,
  setSelectedType,
}) {
  const filters = [
    "",
    "Placement",
    "Result",
    "Event",
  ];

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        marginTop: 4,
        marginBottom: 4,
        justifyContent: "center",
      }}
    >
      {filters.map((item) => (
        <Button
          key={item}
          variant={
            selectedType === item
              ? "contained"
              : "outlined"
          }
          onClick={() =>
            setSelectedType(item)
          }
        >
          {item || "All"}
        </Button>
      ))}
    </Stack>
  );
}

export default FilterBar;