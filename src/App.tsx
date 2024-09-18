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
      <Route path="/tickets-booking/" element={<Footer />}>
        <Route path="/tickets-booking/" element={<MainPage />}></Route>
        <Route path="/tickets-booking/booking" element={<HeaderSearch />}>
          <Route path="/tickets-booking/booking" element={<TrainsList />}></Route>
          <Route path="/tickets-booking/booking/:trainId" element={<TrainOptions />}></Route>
          <Route
            path="/tickets-booking/booking/passengers"
            element={<PassengersList />}
          ></Route>
          <Route path="/tickets-booking/booking/payment" element={<Payment />}></Route>
          <Route path="/tickets-booking/booking/review" element={<Review />}></Route>
        </Route>
        <Route path="/tickets-booking/final" element={<Final />}></Route>
      </Route>
    </>
  )
);


function App() {
  return <RouterProvider router={routerProv}></RouterProvider>;
}

export default App;
