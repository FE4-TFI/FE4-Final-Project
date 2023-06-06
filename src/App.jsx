import { Provider } from "react-redux";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import AllRoutes from "./routes/allRoutes";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ArtikelApi } from "./helper/apiSlice";
import store from "./helper/store";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={ArtikelApi}>
        <AllRoutes />
      </ApiProvider>
    </Provider>
  )
}

export default App
