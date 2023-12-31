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
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// data and image and companent
import { ContextApi } from "../context/context";
import _DrawerAddNewProduct from "./DrawerAddNewProduct";

export default function _DrawerAddNewCa_ry(props) {
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
  let [categoryNameRu, setCategoryNameRu] = useState("");
  let [categoryNameUz, setCategoryNameUz] = useState("");
  let [bigCategoryName, setBigCategoryName] = useState("");

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

  let textEnter = (type) => {
    console.log(type.target.value);

    if (type.target.name === "nameCategoryUz")
      setCategoryNameUz(type.target.value);
    if (type.target.name === "nameCategoryRu")
      setCategoryNameRu(type.target.value);
    if (type.target.name === "bigCategoryName")
      setBigCategoryName(type.target.value);
  };

  const maxIdCategory = categories.reduce((maxId, currentOrder) => {
    return Math.max(maxId, currentOrder.id);
  }, -1);

  let addNewCategory = () => {
    if (categoryNameUz !== "") {
      setCategories((prev) => [
        ...prev,
        {
          id: maxIdCategory + 1,
          categoryName: categoryNameUz,
          categoryNameRu: categoryNameRu ? categoryNameRu : null,
          bigCategoryId: bigCategoryName ? bigCategoryName : null,
        },
      ]);

      toggleDrawer("right", false)();

      setCategoryNameRu("");
      setCategoryNameUz("");
      setBigCategoryName("");
    } else {
      alert("Text kiriting !");
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
            Yangi kategori qo’shish
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
              Kategoriya nomi uz
            </Typography>

            <TextField
              value={categoryNameUz}
              name="nameCategoryUz"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Kategoriya nomi uz . . ."
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
                top: "-7px",
              },
            }}
          >
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Kategoriya nomi ru
            </Typography>

            <TextField
              value={categoryNameRu}
              name="nameCategoryRu"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Kategoriya nomi ru . . ."
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
                top: "-7px",
              },
            }}
          >
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Big category name
            </Typography>

            <TextField
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              variant="outlined"
              value={bigCategoryName}
              placeholder="Kategoriya . . ."
              name="bigCategoryName"
              onChange={(e) => textEnter(e)}
            />
          </Box>

          <Box>
            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => addNewCategory()}
            >
              Saqlash
            </button>
          </Box>
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
        <Typography sx={titleStyle}>Yangi kategoriya qo’shish</Typography>
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
