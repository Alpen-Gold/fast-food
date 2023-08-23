import * as React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useLocalStorageState } from "ahooks";

// Component
import { ContextApi } from "./context/context";
import _LoginPage from "./login/login";
import _Leyaut from "./components/Leyaut";
import _Orders from "./components/Orders";
import _Category from "./components/Category";
import _Product from "./components/Product";
import _Fleal from "./components/Fleal";
import _Customers from "./components/Customers";
import _Report from "./components/Report";
import _Complaints_Opinions from "./components/Complaints-Opinions";
import _Location from "./components/Location";
import _Position from "./components/Position";
// Data
import { ordersData } from "./data/ordersData";
import { categoriesData } from "./data/categoriesData";
import { productsData } from "./data/productsData";
import { flealsData } from "./data/flealData";
import { customersData } from "./data/сustomersData";
import { complaintsOpinionsData } from "./data/complaints-Opinions";
import { positionData } from "./data/positionData";

function App() {
  // States for data
  let [orders, setOrders] = useState(ordersData);
  let [categories, setCategories] = useState(categoriesData);
  let [products, setProducts] = useState(productsData);
  let [fleals, setFleals] = useState(flealsData);
  let [customers, setCustomers] = useState(customersData);
  let [position, setPosition] = useState(positionData);
  let [complaintsOpinions, setComplaintsOpinions] = useState(
    complaintsOpinionsData
  );
  let [buyesProducts, setBuyesProducts] = useState([]);

  // login element
  const [adminActivated, setAdminActivated] = useLocalStorageState("logged", {
    defaultValue: false,
  });

  // Navigation setup
  const navigate = useNavigate();
  const location = useLocation();

  // Check admin status and navigate accordingly
  useEffect(() => {
    if (adminActivated && location.pathname === "/login") navigate("/");
    else if (!adminActivated) navigate("/login");
  }, [adminActivated]);
  // login element end

  return (
    <ContextApi.Provider
      value={{
        orders,
        setOrders,
        categories,
        setCategories,
        products,
        setProducts,
        buyesProducts,
        setBuyesProducts,
        fleals,
        setFleals,
        customers,
        setCustomers,
        complaintsOpinions,
        setComplaintsOpinions,
        position,
        setPosition,
      }}
    >
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={<_LoginPage setAdminActivated={setAdminActivated} />}
        ></Route>

        {/* Main Layout Route */}
        <Route path="/" element={<_Leyaut />}>
          {/* Sub-routes */}
          <Route index element={<_Orders />}></Route>
          <Route path="/orders" element={<_Orders />}></Route>
          <Route path="/category" element={<_Category />}></Route>
          <Route path="/product" element={<_Product />}></Route>
          <Route path="/fleal" element={<_Fleal />}></Route>
          <Route path="/customers" element={<_Customers />}></Route>
          <Route path="/report" element={<_Report />}></Route>
          <Route
            path="/complaints-opinions"
            element={<_Complaints_Opinions />}
          ></Route>
          <Route path="/location" element={<_Location />}></Route>
          <Route path="/position" element={<_Position />}></Route>
        </Route>
      </Routes>
    </ContextApi.Provider>
  );
}

export default App;
