import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Navigation from "./pages/Navigation";
import MainPage from "./pages/MainPage";
import HeaderSearch from "./pages/HeaderSearch";
import Train from "./pages/Tickets";

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<HeaderSearch />}>
          <Route path="/booking/tickets" element={<Train />}></Route>
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={routerProv}></RouterProvider>;
}



export default App;