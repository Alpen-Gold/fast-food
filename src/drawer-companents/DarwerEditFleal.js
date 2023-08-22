import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { buttonStyle, disBetween, topCardCenter } from "../styles/style-sx";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// data and image and companent
import truck from "../img/truck.svg";
import { ContextApi } from "../context/context";
import { productsData } from "../data/productsData";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import _DrawerAddNewProduct from "./DrawerAddNewProduct";
export default function _DrawerEditFleal(props) {
  let { fleals, setFleals } = useContext(ContextApi);

  let [nameValueUz, setNameValueUz] = useState("");
  let [nameValueRu, setNameValueRu] = useState("");
  let [nameValueModjal, setNameValueModjal] = useState("");
  let [startWorkValue, setStartWorkValue] = useState("");
  let [endWorkValue, setEndWorkValue] = useState("");
  let [editClcik, setEditClick] = useState({});

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

  let textEnter = (e) => {
    if (e.target.name === "flealNameUz") setNameValueUz(e.target.value);
    if (e.target.name === "flealNameRu") setNameValueRu(e.target.value);
    if (e.target.name === "flealNameModjal") setNameValueModjal(e.target.value);
    if (e.target.name === "startWork") setStartWorkValue(e.target.value);
    if (e.target.name === "endWork") setEndWorkValue(e.target.value);
  };

  let editFleal = () => {
    const bigId = Math.max(...fleals.map((item) => item.id));

    if (nameValueUz !== "" && startWorkValue !== "" && endWorkValue !== "") {
      setFleals((prev) => {
        const editedFleals = prev.map((fleal) => {
          if (fleal.id === editClcik.id) {
            return {
              ...fleal,
              flealName: nameValueUz,
              flealNameRu: nameValueRu,
              modjal: nameValueModjal,
              startWork: startWorkValue,
              endWork: endWorkValue,
            };
          }
          return fleal;
        });
        return editedFleals;
      });

      toggleDrawer("right", false)();

      setNameValueRu("");
      setNameValueUz("");
      setNameValueModjal("");
      setStartWorkValue("");
      setEndWorkValue("");
    } else {
      alert("Entered Text !");
    }
  };

  let editProduct = (productItem) => {
    setEditClick(productItem);
    setNameValueUz(productItem.flealName);
    setNameValueRu(productItem.flealNameRu ? productItem.flealNameRu : null);
    setNameValueModjal(productItem.modjal ? productItem.modjal : null);
    setStartWorkValue(productItem.startWork);
    setEndWorkValue(productItem.endWork);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 366 }}
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
        <Box sx={{ width: "100%", minHeight: "100%" }}>
          <Typography variant="text" sx={{ fontSize: "16px" }}>
            Yangi filial qo’shish
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
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Filial nomi uz
            </Typography>

            <TextField
              value={nameValueUz}
              name="flealNameUz"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Filial nomi uz . . ."
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
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Filial nomi ru
            </Typography>

            <TextField
              value={nameValueRu}
              name="flealNameRu"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Filial nomi ru . . ."
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
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Ish vaqti
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                type="time"
                value={startWorkValue}
                name="startWork"
                sx={{ flex: 1 }}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) => textEnter(e)}
              />

              <Box
                sx={{ borderTop: "1px solid grey", width: "30px", mx: "10px" }}
              ></Box>

              <TextField
                type="time"
                value={endWorkValue}
                name="endWork"
                sx={{ flex: 1 }}
                id="outlined-basic"
                variant="outlined"
                onChange={(e) => textEnter(e)}
              />
            </Box>
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
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Filial mo’ljal
            </Typography>

            <TextField
              value={nameValueModjal}
              name="flealNameModjal"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder=" Filial mo’ljal . . ."
              variant="outlined"
              onChange={(e) => textEnter(e)}
            />
          </Box>

          {nameValueModjal ? (
            <iframe
              src={nameValueModjal}
              style={{ width: "100%", height: "167px", borderRadius: "10px" }}
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <Typography
              sx={{ width: "100%", height: "167px", textAlign: "center" }}
            >
              No Location!
            </Typography>
          )}

          <button
            className="all-button"
            style={{ fontSize: "20px", marginTop: "15px" }}
            onClick={() => editFleal()}
          >
            Saqlash
          </button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        padding={" 0 2.5px"}
        onClick={() => (
          toggleDrawer("right", true)(), editProduct(props.productItem)
        )}
      >
        <button
          className={"ordersBtnTopLeftActive"}
          style={{ cursor: "pointer" }}
        >
          <ModeEditOutlinedIcon></ModeEditOutlinedIcon>
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
    </div>
  );
}
