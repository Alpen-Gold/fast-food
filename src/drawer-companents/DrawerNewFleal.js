import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import {
  buttonStyle,
  disBetween,
  titleStyle,
  topCardCenter,
  topCardLest,
} from "../styles/style-sx";
import { TextField, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// data and image and companent
import truck from "../img/truck.svg";
import { ContextApi } from "../context/context";
import { productsData } from "../data/productsData";
import _DrawerAddNewProduct from "./DrawerAddNewProduct";

export default function _DrawerNewFleal(props) {
  let { fleals, setFleals } = useContext(ContextApi);
  let [nameValueUz, setNameValueUz] = useState("");
  let [nameValueRu, setNameValueRu] = useState("");
  let [nameValueModjal, setNameValueModjal] = useState("");
  let [startWorkValue, setStartWorkValue] = useState("");
  let [endWorkValue, setEndWorkValue] = useState("");

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

  let addNewFleal = () => {
    const bigId = Math.max(...fleals.map((item) => item.id));

    if (nameValueUz !== "" && startWorkValue !== "" && endWorkValue !== "") {
      setFleals((prev) => [
        ...prev,
        {
          id: bigId + 1,
          flealName: nameValueUz,
          flealNameRu: nameValueRu !== "" ? nameValueRu : null,
          modjal: nameValueModjal !== "" ? nameValueModjal : null,
          startWork: startWorkValue,
          endWork: endWorkValue,
        },
      ]);

      setNameValueRu("");
      setNameValueUz("");
      setNameValueModjal("");
      setStartWorkValue("");
      setEndWorkValue("");
    } else {
      alert("entered Text !");
    }
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
            onClick={() => addNewFleal()}
          >
            Saqlash
          </button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Box sx={topCardLest} onClick={toggleDrawer("right", true)}>
        <Button>
          <Box sx={buttonStyle}>
            <Typography sx={{ fontSize: "28px", color: "white" }}>+</Typography>
          </Box>
        </Button>
        <Typography sx={titleStyle}>Yangi filial qo’shish</Typography>
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
