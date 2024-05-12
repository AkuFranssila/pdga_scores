import { ArrowBack } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export function Header() {
  // Add button that returns to the home page

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <AppBar
        position="static"
        component="nav"
        sx={{
          backgroundColor: "transparent",
          borderBottom: "1px solid #e0e0e0",
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color={"primary"}
          >
            PDGA Scores
          </Typography>
          <Button startIcon={<ArrowBack />} href={"/"}>
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
