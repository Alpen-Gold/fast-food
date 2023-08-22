import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { buttonStyle, disBetween, topCardCenter } from "../styles/style-sx";
import { Checkbox, TextField, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// data and image and companent
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { ContextApi } from "../context/context";
import _DrawerAddNewProduct from "./DrawerAddNewProduct";

export default function _DrawerCustomer(props) {
  let { customers, setCustomers } = useContext(ContextApi);
  let [ucerName, setUcerName] = useState("");
  let [ucerNumber, setUcerNumber] = useState("");
  let [buyCount, setBuyCount] = useState("");
  let [typeActive, setTypeActive] = useState(true);

  //   edit state
  let [ucerNameEdit, setUcerNameEdit] = useState("");
  let [ucerNumberEdit, setUcerNumberEdit] = useState("");
  let [buyCountEdit, setBuyCountEdit] = useState("");
  let [typeActiveEdit, setTypeActiveEdit] = useState(true);
  let [clickCostomer, setClickCostomer] = useState({});

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

  let textEnter = (e) => {
    if (e.target.name === "ucerName") setUcerName(e.target.value);
    if (e.target.name === "ucerNumber") setUcerNumber(e.target.value);
    if (e.target.name === "buyCount") setBuyCount(e.target.value);
  };

  let textEnterEdit = (e) => {
    if (e.target.name === "ucerNameEdit") setUcerNameEdit(e.target.value);
    if (e.target.name === "ucerNumberEdit") setUcerNumberEdit(e.target.value);
    if (e.target.name === "buyCountEdit") setBuyCountEdit(e.target.value);
  };

  let addNewCustomer = () => {
    const bigId = Math.max(...customers.map((item) => item.id));

    if (ucerName !== "" && ucerNumber !== "") {
      setCustomers((prev) => [
        ...prev,
        {
          id: bigId + 1,
          phone: ucerNumber,
          name: ucerName,
          buyCount: buyCount !== "" ? buyCount : null,
          isActive: typeActive ? true : false,
        },
      ]);

      toggleDrawer("right", false)();

      setUcerNumber("");
      setUcerName("");
      setBuyCount("");
      setTypeActive(true);
    } else {
      alert("entered Text !");
    }
  };

  let editIconClick = (customerItem) => {
    setUcerNumberEdit(customerItem.phone);
    setUcerNameEdit(customerItem.name);
    setBuyCountEdit(customerItem.buyCount);
    setTypeActiveEdit(customerItem.isActive);
    setClickCostomer(customerItem);
  };

  let editCustomer = () => {
    setCustomers((prev) =>
      prev.map((item) => {
        if (item.id === clickCostomer.id) {
          return {
            ...item,
            phone: ucerNumberEdit,
            name: ucerNameEdit,
            buyCount: buyCountEdit,
            isActive: typeActiveEdit,
          };
        }
        return item; // Eğer id eşleşmiyorsa, değişiklik yapmadan mevcut veriyi geri döndür
      })
    );

    toggleDrawer("right", false)();
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 366 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {props.type === "new" ? (
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
          <Box sx={{ width: "100%", minHeight: "100%" }}>
            <Typography variant="text" sx={{ fontSize: "16px" }}>
              Yangi mijoz qo’shish
            </Typography>

            <Box
              sx={{
                minWidth: "100%",
                my: "20px",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-7px",
                },
              }}
            >
              <Typography
                sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}
              >
                Mijoz ismi
              </Typography>

              <TextField
                value={ucerName}
                name="ucerName"
                type="text"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Mijoz ismi . . ."
                variant="outlined"
                onChange={(e) => textEnter(e)}
              />
            </Box>

            <Box
              sx={{
                minWidth: "100%",
                my: "20px",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-5px",
                },
              }}
            >
              <Typography
                sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}
              >
                Telefon raqam
              </Typography>

              <TextField
                value={ucerNumber}
                name="ucerNumber"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Telefon raqam . . ."
                variant="outlined"
                onChange={(e) => textEnter(e)}
              />
            </Box>

            <Box
              sx={{
                minWidth: "100%",
                my: "20px",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-5px",
                },
              }}
            >
              <Typography
                sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}
              >
                Buyurtmalar soni
              </Typography>

              <TextField
                value={buyCount}
                name="buyCount"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Buyurtmalar soni . . ."
                variant="outlined"
                onChange={(e) => textEnter(e)}
              />
            </Box>

            <Box
              sx={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-5px",
                },
              }}
            >
              <Checkbox
                {...label}
                checked={!typeActive}
                onChange={(e) => setTypeActive(!e.target.checked)}
              />
              <Typography
                sx={{ color: "black", fontSize: "15px", color: grey[700] }}
              >
                Blocklangan mijoz
              </Typography>
            </Box>

            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => addNewCustomer()}
            >
              Saqlash
            </button>
          </Box>
        </Box>
      ) : (
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
          <Box sx={{ width: "100%", minHeight: "100%" }}>
            <Typography variant="text" sx={{ fontSize: "16px" }}>
              Yangi mijoz qo’shish
            </Typography>

            <Box
              sx={{
                minWidth: "100%",
                my: "20px",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-7px",
                },
              }}
            >
              <Typography
                sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}
              >
                Filial ismi
              </Typography>

              <TextField
                value={ucerNameEdit}
                name="ucerNameEdit"
                type="text"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Filial ismi . . ."
                variant="outlined"
                onChange={(e) => textEnterEdit(e)}
              />
            </Box>

            <Box
              sx={{
                minWidth: "100%",
                my: "20px",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-5px",
                },
              }}
            >
              <Typography
                sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}
              >
                Telefon raqam
              </Typography>

              <TextField
                value={ucerNumberEdit}
                name="ucerNumberEdit"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Telefon raqam . . ."
                variant="outlined"
                onChange={(e) => textEnterEdit(e)}
              />
            </Box>

            <Box
              sx={{
                minWidth: "100%",
                my: "20px",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-5px",
                },
              }}
            >
              <Typography
                sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}
              >
                Buyurtmalar soni
              </Typography>

              <TextField
                value={buyCountEdit}
                name="buyCountEdit"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Buyurtmalar soni . . ."
                variant="outlined"
                onChange={(e) => textEnterEdit(e)}
              />
            </Box>

            <Box
              sx={{
                minWidth: "100%",
                display: "flex",
                alignItems: "center",
                "& #outlined-basic": {
                  padding: "10px",
                },

                "& .MuiInputLabel-root": {
                  top: "-5px",
                },
              }}
            >
              <Checkbox
                {...label}
                checked={!typeActiveEdit}
                onChange={(e) => setTypeActiveEdit(!e.target.checked)}
              />
              <Typography
                sx={{ color: "black", fontSize: "15px", color: grey[700] }}
              >
                Blocklangan mijoz
              </Typography>
            </Box>

            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => editCustomer()}
            >
              Saqlash
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );

  return (
    <div>
      {props.type === "new" ? (
        <Button onClick={toggleDrawer("right", true)}>
          <Box sx={buttonStyle}>
            <Typography sx={{ fontSize: "28px", color: "white" }}>+</Typography>
          </Box>
        </Button>
      ) : props.type === "icon" ? (
        <Box
          padding={" 0 2.5px"}
          onClick={() => (
            toggleDrawer("right", true)(), editIconClick(props.customerItem)
          )}
        >
          <button
            className={"ordersBtnTopLeftActive"}
            style={{ cursor: "pointer" }}
          >
            <ModeEditOutlinedIcon></ModeEditOutlinedIcon>
          </button>
        </Box>
      ) : null}
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
