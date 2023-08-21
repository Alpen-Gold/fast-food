import * as React from "react";
import { useState, useContext } from "react";
import {
  Box,
  Button,
  Drawer,
  ImageListItem,
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
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { buttonStyle, topCardCenter } from "../styles/style-sx";
import { ContextApi } from "../context/context";
import { productsData } from "../data/productsData";
import { grey, red } from "@mui/material/colors";

function _OrderVertical(props) {
  let { item } = props;

  let allSummaOrder = item.orders.reduce(
    (total, order) => total + order.price * order.count,
    0
  );

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
      <Box
        onClick={toggleDrawer("right", true)}
        sx={{
          width: "100%",
          bgcolor: "white",
          padding: "20px",
          borderRadius: "6px",
          overflowY: "auto",
          mb: "10px",
          "&:hover": {
            boxShadow: "0 20px 25px 0 rgba(176, 177, 181, 0.43)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  bgcolor: "#20D472",
                  width: "50px",
                  height: "36px",
                  borderRadius: "20px",
                  display: "flex",
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>{item.id}</Typography>
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

          <Box sx={disBetween}>
            <img src={clockCopy} alt="" />

            <Typography sx={{ ml: "12px", fontSize: "14px" }}>
              {item.time}
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

        <Box sx={{ display: "flex", alignItems: "start" }}>
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
            mt: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#8D9BA8", fontSize: "11px" }}>
            Umumiy summa
          </Typography>

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

        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {allSummaOrder}
          <span style={{ fontWeight: 300 }}>UZS</span>
        </Typography>

        <Box
          sx={{
            borderTop: "1px solid grey",
            width: "100%",
            mt: "20px",
            mb: "20px",
          }}
        ></Box>

        <Box sx={disBetween}>
          <Box>
            <Typography sx={{ color: "#8D9BA8", fontSize: "11px" }}>
              Operator:
            </Typography>

            <Typography
              variant="text"
              sx={{ fontSize: "20px", color: "#2D3A45" }}
            >
              {item.operator}
            </Typography>
          </Box>

          <button className="xcardType">
            <img src={x} alt="" />
          </button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "18px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#8D9BA8", fontSize: "11px" }}>
              Filial:
            </Typography>

            <Typography
              variant="text"
              sx={{ fontSize: "20px", color: "#2D3A45" }}
            >
              {item.flial}
            </Typography>
          </Box>

          <button className="xcardType">
            <img src={Path} alt="" />
          </button>
        </Box>
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

export default _OrderVertical;
