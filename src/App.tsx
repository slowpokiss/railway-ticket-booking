import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Navigation from "./pages/Navigation";
import MainPage from "./pages/MainPage";
import Tickets from "./pages/Tickets";
import Train from "./pages/Train";

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/tickets" element={<Tickets />}>
          <Route path="/tickets/train" element={<Train />}></Route>
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routerProv}></RouterProvider>;
}



export default App;
