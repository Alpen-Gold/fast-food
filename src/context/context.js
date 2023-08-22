import { createContext } from "react";

export const ContextApi = createContext({
  orders: [],
  setOrders: (orders) => {},
  categories: [],
  setCategories: (category) => {},
  products: [],
  setProducts: (product) => {},
  buyesProducts: [],
  setBuyesProducts: (product) => {},
  fleals: [],
  setFleals: (fleals) => {},
  customers: [],
  setCustomers: (customers) => {},
});
