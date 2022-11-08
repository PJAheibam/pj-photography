import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthContextProvider from "./context/auth-contex";
import { router } from "./routes/main";
import { GlobaStyles } from "./styles/global.styles";
import { darkTheme } from "./styles/theme/dark-theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthContextProvider>
        <GlobaStyles />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
