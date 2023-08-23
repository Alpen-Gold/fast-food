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
import {
  FormControl,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// data and image and companent
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import truck from "../img/truck.svg";
import { ContextApi } from "../context/context";
import { productsData } from "../data/productsData";
import _DrawerAddNewProduct from "./DrawerAddNewProduct";

export default function _DrawerPosition(props) {
  let { position, setPosition } = useContext(ContextApi);
  let [positionName, setPositionName] = useState("");
  let [positionNumber, setPositionNumber] = useState("");
  let [turiValue, setTuriValue] = useState("Operator");
  let [clickItem, setClickItem] = useState({});

  let [positionNameEdit, setPositionNameEdit] = useState("");
  let [positionNumberEdit, setPositionNumberEdit] = useState("");
  let [turiValueEdit, setTuriValueEdit] = useState("Operator");

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
    if (e.target.name === "positionName") setPositionName(e.target.value);
    if (e.target.name === "positionNumber") setPositionNumber(e.target.value);
  };

  let addNewPosition = () => {
    const bigId = Math.max(...position.map((item) => item.id));

    if (positionName !== "" && turiValue !== "" && positionNumber !== "") {
      setPosition((prev) => [
        ...prev,
        {
          id: bigId + 1,
          name: positionName,
          phone: positionNumber,
          position: turiValue,
        },
      ]);

      setPositionNumber("");
      setPositionName("");
      setTuriValue("Operator");

      toggleDrawer("right", false)();
    } else {
      alert("entered Text !");
    }
  };

  let textEnterEdit = (e) => {
    if (e.target.name === "positionNameEdit")
      setPositionNameEdit(e.target.value);
    if (e.target.name === "positionNumberEdit")
      setPositionNumberEdit(e.target.value);
  };

  let addNewPositionEdit = () => {
    const bigId = Math.max(...position.map((item) => item.id));

    if (
      positionNameEdit !== "" &&
      turiValueEdit !== "" &&
      positionNumberEdit !== ""
    ) {
      setPosition((prev) =>
        prev.map((item) => {
          if (item.id === clickItem.id) {
            return {
              ...item,
              phone: positionNumberEdit,
              name: positionNameEdit,
              position: turiValueEdit,
            };
          }
          return item;
        })
      );
      setPositionNameEdit("");
      setPositionNumberEdit("");
      setTuriValueEdit("Operator");

      toggleDrawer("right", false)();
    } else {
      alert("entered Text !");
    }
  };

  let editPosition = (item) => {
    setClickItem(item);
    setPositionNameEdit(item.name);
    setPositionNumberEdit(item.phone);
    setTuriValueEdit(item.position);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 366 }}
      role="presentation"
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
              Yangi Hodim qo’shish
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
              <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
                Hodim ismi
              </Typography>

              <TextField
                value={positionName}
                name="positionName"
                type="text"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Hodim nomi . . ."
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
              <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
                Hodim raqami
              </Typography>

              <TextField
                value={positionNumber}
                name="positionNumber"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Hodim raqami . . ."
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
              <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
                Turini Tanlang
              </Typography>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <NativeSelect
                    value={turiValue}
                    onChange={(e) => setTuriValue(e.target.value)}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"Operator"}>Operator</option>
                    <option value={"Admin"}>Admin</option>
                    <option value={"Kassir"}>Kassir</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>

            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => addNewPosition()}
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
              Yangi Hodim qo’shish
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
              <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
                Hodim ismi
              </Typography>

              <TextField
                value={positionNameEdit}
                name="positionNameEdit"
                type="text"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Hodim nomi . . ."
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
              <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
                Hodim raqami
              </Typography>

              <TextField
                value={positionNumberEdit}
                name="positionNumberEdit"
                sx={{ minWidth: "100%" }}
                id="outlined-basic"
                placeholder="Hodim raqami . . ."
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
              <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
                Turini Tanlang
              </Typography>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <NativeSelect
                    value={turiValueEdit}
                    onChange={(e) => setTuriValueEdit(e.target.value)}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"Operator"}>Operator</option>
                    <option value={"Admin"}>Admin</option>
                    <option value={"Kassir"}>Kassir</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Box>

            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => addNewPositionEdit()}
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
        <Box sx={topCardLest} onClick={toggleDrawer("right", true)}>
          <Button>
            <Box sx={buttonStyle}>
              <Typography sx={{ fontSize: "28px", color: "white" }}>
                +
              </Typography>
            </Box>
          </Button>
          <Typography sx={titleStyle}>Yangi Hodim qo’shish</Typography>
        </Box>
      ) : props.type === "edit" ? (
        <Box
          padding={" 0 2.5px"}
          onClick={() => (
            toggleDrawer("right", true)(), editPosition(props.positionItem)
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
