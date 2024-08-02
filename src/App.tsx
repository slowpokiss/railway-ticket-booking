import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Footer from "./pages/Footer";
import MainPage from "./pages/MainPage";
import HeaderSearch from "./pages/HeaderSearch";
import TrainOptions from "./components/TrainOptions";
import TrainsList from "./components/TrainsList";
import PassengersList from "./components/PassengersList";
import Payment from "./components/Payment";
import Review from "./components/Review";
import Final from "./pages/Final";

const routerProv = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Footer />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<HeaderSearch />}>
          <Route path="/booking" element={<TrainsList />}></Route>
          <Route path="/booking/:trainId" element={<TrainOptions />}></Route>
          <Route
            path="/booking/passengers"
            element={<PassengersList />}
          ></Route>
          <Route path="/booking/payment" element={<Payment />}></Route>
          <Route path="/booking/review" element={<Review />}></Route>
        </Route>
        <Route path="/final" element={<Final />}></Route>
      </Route>
    </>
  )
);


function App() {
  //return <Seats />


  return <RouterProvider router={routerProv}></RouterProvider>;
}

export default App;
