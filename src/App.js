import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/auth-contex";
import { router } from "./routes/main";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
