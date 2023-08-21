import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { buttonStyle, disBetween, topCardCenter } from "../styles/style-sx";
import { TextField, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// data and image and companent
import truck from "../img/truck.svg";
import { ContextApi } from "../context/context";
import { productsData } from "../data/productsData";
import _DrawerOrderCheck from "./DrawerOrderCheck";

export default function _DrawerNewOrder() {
  let {
    orders,
    setOrders,
    categories,
    setCategories,
    products,
    setProducts,
    buyesProducts,
    setBuyesProducts,
  } = useContext(ContextApi);
  let [activeBtnCategory, setActiveBtnCategory] = useState(0);
  let [activeCategoryType, setActiveCategoryType] = useState(
    categories[0].categoryName
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let countClick = (type, productItem) => {
    if (type === "+") {
      let indexCount = buyesProducts.findIndex((item) => {
        return (
          item.productName === productItem.productName &&
          item.price === productItem.price
        );
      });

      let updatedCounts = [...buyesProducts];
      updatedCounts[indexCount].count = updatedCounts[indexCount].count + 1;
      setBuyesProducts(updatedCounts);
    } else {
      let indexCount = buyesProducts.findIndex((item) => {
        return item.productName === productItem.productName;
      });

      if (indexCount > -1 && buyesProducts[indexCount].count > 0) {
        let updatedCounts = [...buyesProducts];
        updatedCounts[indexCount].count = updatedCounts[indexCount].count - 1;

        if (updatedCounts[indexCount].count <= 0) {
          updatedCounts.splice(indexCount, 1);
        }

        setBuyesProducts(updatedCounts);
      }
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  let activedCategory = (index, item) => {
    console.log(index, item);
    setActiveBtnCategory(index);
    setActiveCategoryType(item.categoryName);
  };

  let clickBuyBtn = (productItem, productIndex) => {
    console.log("click buy btn !");
    console.log(productItem, productIndex);

    console.log(buyesProducts);

    setBuyesProducts((prev) => [
      ...prev,
      {
        count: 1,
        productName: productItem.productName,
        price: productItem.price,
      },
    ]);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 970 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        className="big-cards-order-product"
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          minHeight: "100vh",
          bgcolor: "#FFFFFF",
          padding: "30px",
          gap: "20px",
        }}
      >
        <Box sx={{ width: "65%", height: "100%" }}>
          <Typography variant="text">Yangi buyurtma qo’shish</Typography>

          <Box
            sx={{
              backgroundColor: "white",
              flex: 1,
              padding: "20px 0",
            }}
          >
            <Box sx={topCardCenter} style={{ overflowX: "auto" }}>
              {categories.map((item, index) => (
                <button
                  key={index}
                  className={
                    index === activeBtnCategory
                      ? "navbarActiveOrderBtn"
                      : "navbarNoActiveOrderBtn"
                  }
                  onClick={() => activedCategory(index, item)}
                >
                  {item.categoryName}
                </button>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {products
              .filter((itemProductFilter) => {
                return (
                  itemProductFilter.categoryId ===
                  categories.find((item) => {
                    return item.categoryName === activeCategoryType;
                  }).id
                );
              })
              .map((productItem, productIndex) => {
                return (
                  <Box
                    sx={{ width: "50%", padding: "9px" }}
                    key={productItem.id}
                  >
                    <Box className="set-order-no-active">
                      <Box>
                        <img
                          src={productItem.productImage}
                          alt=""
                          className="product-img-new-order"
                          style={{ width: "100%" }}
                        />
                      </Box>

                      <Box sx={{ padding: "0 15px", pb: "8px" }}>
                        <Typography sx={{ fontWeight: 500, fontSize: "17px" }}>
                          {productItem.productName}
                        </Typography>
                        <Typography sx={{ color: "#8D9BA8", fontSize: "11px" }}>
                          {productItem.extra}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: "10px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "20px", fontWeight: "bold" }}
                          >
                            {productItem.price}
                            <span style={{ fontWeight: 300 }}> UZS</span>
                          </Typography>

                          {buyesProducts.findIndex((item) => {
                            return item.productName === productItem.productName;
                          }) > -1 &&
                          buyesProducts[
                            buyesProducts.findIndex((item) => {
                              return (
                                item.productName === productItem.productName
                              );
                            })
                          ]?.count !== 0 ? (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid grey",
                                borderRadius: "5px",
                              }}
                            >
                              <button
                                style={{
                                  cursor: "pointer",
                                  border: "none",
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={() => countClick("-", productItem)}
                              >
                                <RemoveIcon
                                  sx={{ fontSize: "20px" }}
                                ></RemoveIcon>
                              </button>

                              <Typography variant="text">
                                {buyesProducts.findIndex((item) => {
                                  return (
                                    item.productName === productItem.productName
                                  );
                                }) > -1
                                  ? buyesProducts[
                                      buyesProducts.findIndex((item) => {
                                        return (
                                          item.productName ===
                                          productItem.productName
                                        );
                                      })
                                    ]?.count
                                  : null}
                                {console.log(
                                  buyesProducts,
                                  productItem.productName,
                                  buyesProducts.findIndex((item) => {
                                    return (
                                      item.name === productItem.productName
                                    );
                                  })
                                )}
                              </Typography>

                              <button
                                style={{
                                  cursor: "pointer",
                                  border: "none",
                                  backgroundColor: "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={() => countClick("+", productItem)}
                              >
                                <AddIcon sx={{ fontSize: "20px" }}></AddIcon>
                              </button>
                            </Box>
                          ) : (
                            <button
                              className="all-button"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                              }}
                              onClick={() =>
                                clickBuyBtn(productItem, productIndex)
                              }
                            >
                              <AddIcon sx={{ fontSize: "18px" }}></AddIcon>
                              Qo’shish
                            </button>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>

        <Box sx={{ width: "35%", minHeight: "100%" }}>
          <_DrawerOrderCheck toggleDrawer={toggleDrawer} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <Box sx={buttonStyle}>
          <Typography sx={{ fontSize: "28px", color: "white" }}>+</Typography>
        </Box>
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
