import { Button, ThemeProvider } from "@mui/material";
import { LightTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div className="App">
        <Button variant="contained" color="primary">
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
