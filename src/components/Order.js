import * as React from "react";
import { useState, useContext } from "react";
import { grey, red } from "@mui/material/colors";

import {
  Box,
  Button,
  Drawer,
  ImageListItem,
  SwipeableDrawer,
  TextField,
  Typography,
  useThemeProps,
} from "@mui/material";

// Component
import users from "../img/users.svg";
import phone from "../img/phone.svg";
import clipboard from "../img/clipboard.svg";
import truck from "../img/truck.svg";
import path from "../img/Path.png";
import x from "../img/x.svg";
import Path from "../img/Path.svg";
import clockCopy from "../img/clock copy.png";
import { disBetween, disCenter, buttonStyleId } from "../styles/style-sx";
import { ContextApi } from "../context/context";

function _Order(props) {
  let { item } = props;
  let {
    buyesProducts,
    setBuyesProducts,
    setOrders,
    orders,
    products,
    setProducts,
  } = useContext(ContextApi);

  let allSummaOrder = item.orders.reduce(
    (total, order) => total + order.price * order.count,
    0
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 366,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <Box sx={disBetween}>
          <Box sx={{ mr: "12px" }}>
            <Box sx={buttonStyleId}>
              <Typography sx={{ fontSize: "20px" }}>{item.id}</Typography>
            </Box>
          </Box>

          <Box sx={disBetween}>
            <img src={clockCopy} alt="" />

            <Typography sx={{ ml: "12px", fontSize: "14px" }}>
              {item.time}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            bgcolor: "#EDEFF3",
            padding: "15px",
            borderRadius: "6px",
            mt: "25px",
            mb: "25px",
          }}
        >
          <Box sx={{ mr: "15px" }}>
            <img src={users} alt="" style={{ opacity: "0.5" }} />
          </Box>

          <Box>
            <Typography
              variant="text"
              sx={{ fontSize: "20px", color: "#2D3A45" }}
            >
              {item.name}
            </Typography>

            <Typography sx={{ fontSize: "14px", color: grey[500] }}>
              {item.phone}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#8D9BA8", fontSize: "11px", fontWeight: 600 }}
            >
              Operator:
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
              {item.operator}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{ color: "#8D9BA8", fontSize: "11px", fontWeight: 600 }}
            >
              Filial:
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
              {item.flial}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid grey",
            width: "100%",
            mt: "20px",
            mb: "20px",
          }}
        ></Box>

        <Box sx={disBetween}>
          <Typography
            sx={{ color: "#8D9BA8", fontSize: "11px", fontWeight: 600 }}
          >
            MAXSULOTLAR
          </Typography>

          <Typography
            sx={{ color: "#8D9BA8", fontSize: "11px", fontWeight: 600 }}
          >
            Soni | narxi
          </Typography>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid grey",
            width: "100%",
            mt: "5px",
            mb: "15px",
          }}
        ></Box>

        {item.orders.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: "5px",
              }}
            >
              <Typography variant="text">{item.productName}</Typography>
              <Typography>
                {item.count}*{item.price} UZS
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            bgcolor: "#EDEFF3",
            padding: "20px",
            borderRadius: "6px",
            mt: "25px",
            mb: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mr: "30px",
              }}
            >
              <img src={clipboard} alt="" />

              <Typography>{allSummaOrder} UZS</Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mb: "7px",
                }}
              >
                <img src={truck} alt="" />

                <Typography>{item.delivery ? "5,000 UZS" : "-"}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mr: "12px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#14E5E4",
                    minWidth: "10px",
                    minHeight: "10px",
                    borderRadius: "50%",
                  }}
                ></Box>

                <Typography sx={{ fontSize: "14px" }}>Payme</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "20px",
            mb: "30px",
          }}
        >
          <button
            className="xcardType"
            onClick={() => props.enteredDale("notDale", item)}
          >
            <img src={x} alt="" />
          </button>

          <button
            className="xcardType"
            onClick={() => props.enteredDale("dale", item)}
          >
            <img src={Path} alt="" />
          </button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ position: "relative", minWidth: "100%" }}>
        <Box
          onClick={toggleDrawer("right", true)}
          sx={{
            display: "flex",
            borderRadius: "6px",
            minWidth: "100%",
            maxHeight: "auto",
            gap: "5px",
            justifyContent: "center",
            transition: "0.5s",
            cursor: "pointer",

            "&:hover": {
              boxShadow: "0px 20px 25px 0px rgba(176, 177, 181, 0.43)",
              transition: "0.5s",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "30px 40px",
              minWidth: "25%",
              borderRadius: "6px 0 0 6px",
            }}
          >
            <Box sx={disBetween}>
              <Box sx={{ mr: "12px" }}>
                <Box sx={buttonStyleId}>
                  <Typography sx={{ fontSize: "20px" }}>{item.id}</Typography>
                </Box>
              </Box>

              <span
                className="bg-icon"
                style={{
                  backgroundColor: "#F6F6F6",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 0,
                }}
              >
                <img src={path} alt="" />
              </span>
            </Box>

            <hr style={{ width: "100%" }} />

            <Box sx={disBetween}>
              <img src={clockCopy} alt="" />

              <Typography sx={{ ml: "12px", fontSize: "20px" }}>
                {item.time}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "space-between",
              padding: "30px 40px",
              minWidth: "25%",
              gap: "10px",
            }}
          >
            <Box sx={disBetween}>
              <Box sx={{ mr: "15px" }}>
                <img src={users} alt="" />
              </Box>

              <Typography
                variant="text"
                sx={{ fontSize: "20px", color: "#2D3A45" }}
              >
                {item.name}
              </Typography>
            </Box>

            <Box sx={disBetween}>
              <img src={phone} alt="" />

              <Typography sx={{ ml: "12px", fontSize: "14px" }}>
                {item.phone}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "space-between",
              padding: "15px 25px",
              minWidth: "25%",
            }}
          >
            <Box sx={disBetween}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mr: "30px",
                  }}
                >
                  <img src={clipboard} alt="" />

                  <Typography>{allSummaOrder} UZS</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mr: "12px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#14E5E4",
                    minWidth: "10px",
                    minHeight: "10px",
                    borderRadius: "50%",
                  }}
                ></Box>

                <Typography sx={{ fontSize: "14px" }}>Payme</Typography>
              </Box>
            </Box>

            <Box sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mr: "30px",
                  mt: "7px",
                }}
              >
                <img src={truck} alt="" />

                <Typography>{item.delivery ? "5,000 UZS" : "-"}</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: "20px" }}>
              <Typography
                sx={{ color: "#8D9BA8", fontSize: "11px", fontWeight: 600 }}
              >
                Umumiy summa
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.delivery ? allSummaOrder + 5000 : allSummaOrder}
                <span style={{ fontWeight: 300 }}>UZS</span>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "space-between",
              padding: "30px 40px",
              borderRadius: "0 6px 6px 0",
              minWidth: "25%",
            }}
          >
            <Typography
              sx={{ color: "#8D9BA8", fontSize: "11px", fontWeight: 600 }}
            >
              Operator:
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {item.operator}
            </Typography>
            <Typography sx={{ color: "#8D9BA8", fontSize: "11px", mt: "15px" }}>
              Filial:
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {item.flial}
            </Typography>
          </Box>
        </Box>
        <button
          className="btnOrderLeftTop"
          disabled={item.status === "cancelled" ? true : false}
          style={{
            display: `${item.status === "cancelled" ? "none" : ""}`,
          }}
          onClick={() => props.enteredDale("notDale", item)}
        >
          <img src={x} alt="" />
        </button>

        <button
          className="btnOrderLeftBottom"
          onClick={() => props.enteredDale("dale", item)}
          disabled={item.status === "closed" ? true : false}
          style={{
            display: `${item.status === "closed" ? "none" : ""}`,
          }}
        >
          <img src={Path} alt="" />
        </button>
      </Box>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
}

export default _Order;
