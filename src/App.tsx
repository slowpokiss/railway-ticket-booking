import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Navigation from "./pages/Navigation";
import MainPage from "./pages/MainPage";
import HeaderSearch from "./pages/HeaderSearch";
import TrainOptions from "./components/TrainOptions";
import TrainsList from "./components/TrainsList";
import Seats from "./components/Seats";
import PassengersList from "./components/PassengersList";

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<HeaderSearch />}>
          <Route path="/booking" element={<TrainsList />}></Route>
          <Route path="/booking/:trainId" element={<TrainOptions />}></Route>
        </Route>
      </Route>
    </>
  )
);

function App() {



  return <div className="p-40">
    <PassengersList />
  </div>
  
  //<Seats />
  //return <RouterProvider router={routerProv}></RouterProvider>;
}

export default App;
