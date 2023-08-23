import * as React from "react";
import { useState } from "react";
import { grey, red } from "@mui/material/colors";
import { useContext } from "react";
import {
  Box,
  Button,
  ImageListItem,
  TextField,
  Typography,
  useThemeProps,
} from "@mui/material";

// Component
import _Order from "./Order";
import _OrderVertical from "./OrderVertical";
import { ContextApi } from "../context/context";
import imgLogin from "../img/3390.png";
import Group2 from "../img/Group 2.svg";
import Group2128 from "../img/Group 2128.png";
import {
  titleStyle,
  buttonStyle,
  BigCards,
  disCenter,
  topCardLest,
  topCardCenter,
  navbarActiveButton,
  topCardCenterLeft,
} from "../styles/style-sx";
import _DrawerNewOrder from "../drawer-companents/DrawerNewOrder";
// Data

function _Orders(props) {
  let { orders, setOrders } = useContext(ContextApi);
  let [activedButtonNavbar, setActivedButtonNavbar] = useState(1);
  let [buttonNavbarLeft, setButtonNavbarLeft] = useState(1);

  let [typeOrders, setTypeOrders] = useState("new");

  let clickNavbarButtons = (index) => {
    console.log(index);
    setActivedButtonNavbar(index);

    if (index === 1) {
      setTypeOrders("new");
    } else if (index === 2) {
      setTypeOrders("accepted");
    } else if (index === 3) {
      setTypeOrders("delivired");
    } else if (index === 4) {
      setTypeOrders("closed");
    } else if (index === 5) {
      setTypeOrders("cancelled");
    }
  };

  let enteredDale = (type, item) => {
    console.log(item.status);
    let itemIndex = orders.find((value) => value.status === item.status);

    if (type === "dale") {
      if (item.status === "new") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "accepted" } : order
          )
        );
      } else if (item.status === "accepted") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "delivired" } : order
          )
        );
      } else if (item.status === "delivired") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "closed" } : order
          )
        );
      } else if (item.status === "closed") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "cancelled" } : order
          )
        );
      } else if (item.status === "cancelled") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "new" } : order
          )
        );
      }
    } else if (type === "notDale") {
      if (item.status === "new") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "cancelled" } : order
          )
        );
      } else if (item.status === "accepted") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "new" } : order
          )
        );
      } else if (item.status === "delivired") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "accepted" } : order
          )
        );
      } else if (item.status === "closed") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "delivired" } : order
          )
        );
      } else if (item.status === "cancelled") {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === item.id ? { ...item, status: "new" } : order
          )
        );
      }
    }
  };

  return (
    <>
      <BigCards>
        <_DrawerNewOrder></_DrawerNewOrder>

        <Box sx={{ backgroundColor: "white", flex: 1, padding: "20px 50px" }}>
          <Box sx={topCardCenter}>
            <button
              className={
                activedButtonNavbar === 1
                  ? "navbarActiveButton"
                  : "navbarNoActiveButton"
              }
              disabled={buttonNavbarLeft === 2 && true}
              style={{ color: buttonNavbarLeft === 2 ? grey[500] : "black" }}
              onClick={() => clickNavbarButtons(1)}
            >
              Yangi
            </button>
            <button
              className={
                activedButtonNavbar === 2
                  ? "navbarActiveButton"
                  : "navbarNoActiveButton"
              }
              disabled={buttonNavbarLeft === 2 && true}
              style={{ color: buttonNavbarLeft === 2 ? grey[500] : "black" }}
              onClick={() => clickNavbarButtons(2)}
            >
              Qabul qilingan
            </button>
            <button
              className={
                activedButtonNavbar === 3
                  ? "navbarActiveButton"
                  : "navbarNoActiveButton"
              }
              disabled={buttonNavbarLeft === 2 && true}
              style={{ color: buttonNavbarLeft === 2 ? grey[500] : "black" }}
              onClick={() => clickNavbarButtons(3)}
            >
              Jo’natilgan
            </button>
            <button
              className={
                activedButtonNavbar === 4
                  ? "navbarActiveButton"
                  : "navbarNoActiveButton"
              }
              disabled={buttonNavbarLeft === 2 && true}
              style={{ color: buttonNavbarLeft === 2 ? grey[500] : "black" }}
              onClick={() => clickNavbarButtons(4)}
            >
              Yopilgan
            </button>

            <button
              className={
                activedButtonNavbar === 5
                  ? "navbarActiveButton"
                  : "navbarNoActiveButton"
              }
              disabled={buttonNavbarLeft === 2 && true}
              style={{ color: buttonNavbarLeft === 2 ? grey[500] : "black" }}
              onClick={() => clickNavbarButtons(5)}
            >
              Bekor qilingan
            </button>
          </Box>
        </Box>

        <Box sx={topCardLest}>
          <Box sx={topCardCenterLeft}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <button
                className={
                  buttonNavbarLeft === 1
                    ? "ordersBtnTopLeftActive"
                    : "ordersBtnTopLeftNoActive"
                }
                onClick={() => setButtonNavbarLeft(1)}
              >
                <img src={Group2} alt="" />
              </button>

              <button
                className={
                  buttonNavbarLeft === 2
                    ? "ordersBtnTopLeftActive"
                    : "ordersBtnTopLeftNoActive"
                }
                onClick={() => setButtonNavbarLeft(2)}
              >
                <img src={Group2128} alt="" />
              </button>
            </Box>
          </Box>
        </Box>
      </BigCards>

      {buttonNavbarLeft === 1 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexDirection: "column",
            padding: "25px 35px",
            pr: "50px",
          }}
        >
          {orders
            .filter((item) => {
              return item.status === typeOrders;
            })
            .map((item, index) => (
              <_Order key={index} item={item} enteredDale={enteredDale} />
            ))}
        </Box>
      ) : (
        <Box sx={{ padding: "25px 35px", display: "flex", gap: "10px" }}>
          <Box sx={{ minWidth: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center ",
                mb: "10px",
                gap: "10px",
              }}
            >
              <Typography sx={{ color: "#8D9BA8", fontSize: "14px" }}>
                Yangi
              </Typography>

              <Box
                style={{
                  padding: "3px 15px ",
                  borderRadius: "4px",
                  color: "#8D9BA8",
                  backgroundColor: "white",
                }}
              >
                {
                  orders.filter((item) => {
                    return item.status === "new";
                  }).length
                }
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                mb: "10px",
                boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#20D472",
                  minWidth: "15px",
                  minHeight: "15px",
                  borderRadius: "50%",
                }}
              ></Box>

              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {orders
                  .filter((item) => item.status === "new")
                  .reduce((totalSum, order) => {
                    const orderTotalSum = order.orders.reduce(
                      (sum, product) => sum + product.price * product.count,
                      0
                    );
                    return totalSum + orderTotalSum;
                  }, 0)
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "UZS",
                  })}
              </Typography>
            </Box>
            {orders
              .filter((item) => {
                return item.status === "new";
              })
              .map((item, index) => (
                <_OrderVertical
                  enteredDale={enteredDale}
                  key={index}
                  item={item}
                />
              ))}
          </Box>

          <Box sx={{ minWidth: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center ",
                mb: "10px",
                gap: "10px",
              }}
            >
              <Typography sx={{ color: "#8D9BA8", fontSize: "14px" }}>
                Qabul qilingan
              </Typography>

              <Box
                style={{
                  padding: "3px 15px ",
                  borderRadius: "4px",
                  color: "#8D9BA8",
                  backgroundColor: "white",
                }}
              >
                {
                  orders.filter((item) => {
                    return item.status === "accepted";
                  }).length
                }
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                mb: "10px",
                boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#11ACFD",
                  minWidth: "15px",
                  minHeight: "15px",
                  borderRadius: "50%",
                }}
              ></Box>

              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {orders
                  .filter((item) => item.status === "accepted")
                  .reduce((totalSum, order) => {
                    const orderTotalSum = order.orders.reduce(
                      (sum, product) => sum + product.price * product.count,
                      0
                    );
                    return totalSum + orderTotalSum;
                  }, 0)
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "UZS",
                  })}
              </Typography>
            </Box>
            {orders
              .filter((item) => {
                return item.status === "accepted";
              })
              .map((item, index) => (
                <_OrderVertical
                  enteredDale={enteredDale}
                  key={index}
                  item={item}
                />
              ))}
          </Box>

          <Box sx={{ minWidth: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center ",
                mb: "10px",
                gap: "10px",
              }}
            >
              <Typography sx={{ color: "#8D9BA8", fontSize: "14px" }}>
                Jo`natilgan
              </Typography>

              <Box
                style={{
                  padding: "3px 15px ",
                  borderRadius: "4px",
                  color: "#8D9BA8",
                  backgroundColor: "white",
                }}
              >
                {
                  orders.filter((item) => {
                    return item.status === "delivired";
                  }).length
                }
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                mb: "10px",
                boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FCB600",
                  minWidth: "15px",
                  minHeight: "15px",
                  borderRadius: "50%",
                }}
              ></Box>

              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {orders
                  .filter((item) => item.status === "delivired")
                  .reduce((totalSum, order) => {
                    const orderTotalSum = order.orders.reduce(
                      (sum, product) => sum + product.price * product.count,
                      0
                    );
                    return totalSum + orderTotalSum;
                  }, 0)
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "UZS",
                  })}
              </Typography>
            </Box>
            {orders
              .filter((item) => {
                return item.status === "delivired";
              })
              .map((item, index) => (
                <_OrderVertical
                  enteredDale={enteredDale}
                  key={index}
                  item={item}
                />
              ))}
          </Box>

          <Box sx={{ minWidth: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center ",
                mb: "10px",
                gap: "10px",
              }}
            >
              <Typography sx={{ color: "#8D9BA8", fontSize: "14px" }}>
                Yopilgan
              </Typography>

              <Box
                style={{
                  padding: "3px 15px ",
                  borderRadius: "4px",
                  color: "#8D9BA8",
                  backgroundColor: "white",
                }}
              >
                {
                  orders.filter((item) => {
                    return item.status === "closed";
                  }).length
                }
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                mb: "10px",
                boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#8E007E",
                  minWidth: "15px",
                  minHeight: "15px",
                  borderRadius: "50%",
                }}
              ></Box>

              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {orders
                  .filter((item) => item.status === "closed")
                  .reduce((totalSum, order) => {
                    const orderTotalSum = order.orders.reduce(
                      (sum, product) => sum + product.price * product.count,
                      0
                    );
                    return totalSum + orderTotalSum;
                  }, 0)
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "UZS",
                  })}
              </Typography>
            </Box>
            {orders
              .filter((item) => {
                return item.status === "closed";
              })
              .map((item, index) => (
                <_OrderVertical
                  enteredDale={enteredDale}
                  key={index}
                  item={item}
                />
              ))}
          </Box>

          <Box sx={{ minWidth: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center ",
                mb: "10px",
                gap: "10px",
              }}
            >
              <Typography sx={{ color: "#8D9BA8", fontSize: "14px" }}>
                Bekor qilingan
              </Typography>

              <Box
                style={{
                  padding: "3px 15px ",
                  borderRadius: "4px",
                  color: "#8D9BA8",
                  backgroundColor: "white",
                }}
              >
                {
                  orders.filter((item) => {
                    return item.status === "cancelled";
                  }).length
                }
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                mb: "10px",
                boxShadow: "0px 2px 2px 0px rgba(174, 176, 181, 0.31)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "red",
                  minWidth: "15px",
                  minHeight: "15px",
                  borderRadius: "50%",
                }}
              ></Box>

              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {orders
                  .filter((item) => item.status === "cancelled")
                  .reduce((totalSum, order) => {
                    const orderTotalSum = order.orders.reduce(
                      (sum, product) => sum + product.price * product.count,
                      0
                    );
                    return totalSum + orderTotalSum;
                  }, 0)
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "UZS",
                  })}
              </Typography>
            </Box>
            {orders
              .filter((item) => {
                return item.status === "cancelled";
              })
              .map((item, index) => (
                <_OrderVertical
                  enteredDale={enteredDale}
                  key={index}
                  item={item}
                />
              ))}
          </Box>
        </Box>
      )}
    </>
  );
}

export default _Orders;
