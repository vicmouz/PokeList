import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";
// import { Container } from './styles';
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "details/:id", element: <PokemonDetails /> }],
  },
]);

export default routes;
