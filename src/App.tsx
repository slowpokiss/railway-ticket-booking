import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Footer from "./pages/Footer";
import MainPage from "./pages/MainPage";
import HeaderSearch from "./pages/HeaderSearch";
import TrainOptions from "./components/TrainOptions";
import TrainsList from "./components/TrainsList";
import Seats from "./components/Seats";
import PassengersList from "./components/PassengersList";
import DoubleSlider from "./components/DoubleSlider";
import Final from "./pages/Final";

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Footer />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<HeaderSearch />}>
          <Route path="/booking" element={<TrainsList />}></Route>
          <Route path="/booking/:trainId" element={<TrainOptions />}></Route>
        </Route>
        <Route path="/final" element={<Final />}></Route>
      </Route>
    </>
  )
);

function App() {
  // return <div className="p-40">
  //   <PassengersList />
  // </div>

  return <RouterProvider router={routerProv}></RouterProvider>;
}

export default App;
