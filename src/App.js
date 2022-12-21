import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AuthContextProvider from "./context/auth-contex";
import { router } from "./routes/main";
import { GlobaStyles } from "./styles/global.styles";
import { darkTheme } from "./styles/theme/dark-theme";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthContextProvider>
        <GlobaStyles />
        <SkeletonTheme baseColor="#26222a" highlightColor="#35303c">
          <RouterProvider router={router} />
        </SkeletonTheme>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
