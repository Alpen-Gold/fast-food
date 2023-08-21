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
import _Employees from "./components/Employees";

// Data
import { ordersData } from "./data/ordersData";
import { categoriesData } from "./data/categoriesData";
import { productsData } from "./data/productsData";
import { bigCategoriesData } from "./data/bigCategory";

function App() {
  let [orders, setOrders] = useState(ordersData);
  let [bigCategories, setBigCategories] = useState(bigCategoriesData);
  let [categories, setCategories] = useState(categoriesData);
  let [products, setProducts] = useState(productsData);
  let [buyesProducts, setBuyesProducts] = useState([]);

  // login element
  const [adminActivated, setAdminActivated] = useLocalStorageState("logged", {
    defaultValue: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

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
        bigCategories,
        setBigCategories,
      }}
    >
      <Routes>
        <Route
          path="/login"
          element={<_LoginPage setAdminActivated={setAdminActivated} />}
        ></Route>
        <Route path="/" element={<_Leyaut />}>
          <Route index element={<_Orders />}></Route>
          <Route path="/orders" element={<_Orders />}></Route>
          <Route path="/category" element={<_Category />}></Route>
          <Route path="/product" element={<_Product />}></Route>
          <Route path="/fleal" element={<_Fleal />}></Route>
          <Route path="/customers" element={<_Customers />}></Route>
          <Route path="/report" element={<_Report />}></Route>
          <Route path="/employees" element={<_Employees />}></Route>
        </Route>
      </Routes>
    </ContextApi.Provider>
  );
}

export default App;
