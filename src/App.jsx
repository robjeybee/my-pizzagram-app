import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import WelcomePage from "./components/WelcomePage";

const router = createBrowserRouter([
  { path: "", element: <WelcomePage /> },
  { path: "profile", element: <ProfilePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
