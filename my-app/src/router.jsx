import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewCharacter from "./pages/newCharacter";
import UpdateCharacter from "./pages/UpdateCharacter";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newcharacter",
    element: <NewCharacter />,
  },
  {
    path: "/updatecharacter/:id",
    element: <UpdateCharacter />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
