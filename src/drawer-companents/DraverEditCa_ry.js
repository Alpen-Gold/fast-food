import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { ContextApi } from "../context/context";
import { buttonStyle, disBetween, topCardCenter } from "../styles/style-sx";

export default function DrawerEditCategory(props) {
  const { categories, setCategories } = useContext(ContextApi);
  const [categoryNameRu, setCategoryNameRu] = useState("");
  const [categoryNameUz, setCategoryNameUz] = useState("");
  const [bigCategoryName, setBigCategoryName] = useState("");
  const [categoryClick, setCategoryClick] = useState({});
  const [state, setState] = useState({
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

  const textEnter = (type) => {
    const { name, value } = type.target;
    if (name === "nameCategoryUz") setCategoryNameUz(value);
    if (name === "nameCategoryRu") setCategoryNameRu(value);
    if (name === "bigCategoryName") setBigCategoryName(value);
  };

  const editCategory = () => {
    if (categoryNameUz !== "") {
      // Kategoriya tahrirlash funksiyasi

      let indexCategory = categories.findIndex(
        (item) => item.id === categoryClick.id
      );

      setCategories((prev) => [
        ...prev.slice(0, indexCategory),
        {
          id: categoryClick.id,
          categoryName: categoryNameUz,
          categoryNameRu: categoryNameRu ? categoryNameRu : null,
          bigCategoryId: bigCategoryName ? bigCategoryName : null,
        },
        ...prev.slice(indexCategory + 1),
      ]);

      toggleDrawer("right", false)();
      setCategoryNameRu("");
      setCategoryNameUz("");
      setBigCategoryName("");
    } else {
      alert("Iltimos, matn kiriting!");
    }
  };

  const clickEdit = (categoryItem) => {
    setCategoryClick(categoryItem);
    setCategoryNameUz(categoryItem.categoryName);
    setCategoryNameRu(
      categoryItem.categoryNameRu ? categoryItem.categoryNameRu : ""
    );
    setBigCategoryName(
      categoryItem.bigCategoryId ? categoryItem.bigCategoryId : null
    );
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 366 }}
      role="presentation"
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
            Kategoriyani tahrirlash
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
              Kategoriya nomi (uz)
            </Typography>
            <TextField
              value={categoryNameUz}
              name="nameCategoryUz"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Kategoriya nomi (uz) ..."
              variant="outlined"
              onChange={textEnter}
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
              Kategoriya nomi (ru)
            </Typography>
            <TextField
              value={categoryNameRu}
              name="nameCategoryRu"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Kategoriya nomi (ru) ..."
              variant="outlined"
              onChange={textEnter}
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
              value={bigCategoryName}
              name="bigCategoryName"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Kategoriya ..."
              variant="outlined"
              onChange={textEnter}
            />
          </Box>

          <Box>
            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={editCategory}
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
      <Box
        padding={" 0 2.5px"}
        onClick={() => {
          clickEdit(props.categoryItem);
          toggleDrawer("right", true)();
        }}
      >
        <button
          className={"ordersBtnTopLeftActive"}
          style={{ cursor: "pointer" }}
        >
          <ModeEditOutlinedIcon />
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
