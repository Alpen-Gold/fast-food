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
export default function _DrawerEditProduct(props) {
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

  let [nameValue, setNameValue] = useState("");
  let [categoryValue, setCategoryValue] = useState("");
  let [priceValue, setPriceValue] = useState("");
  let [extraValue, setExtraValue] = useState("");
  let [editClick, setEditClick] = useState({});
  let [image, setImage] = useState(null);
  let allSummaOrder = buyesProducts.reduce(
    (total, item) => total + item.price * item.count,
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

  let addImageProduct = (e) => {
    console.log("salom");
    setImage(URL.createObjectURL(e.target.files[0]));

    console.log(image);
  };

  let textEnter = (type) => {
    console.log(type.target.value);

    if (type.target.name === "ism") setNameValue(type.target.value);
    if (type.target.name === "category") setCategoryValue(type.target.value);
    if (type.target.name === "price") setPriceValue(type.target.value);
    if (type.target.name === "extra") setExtraValue(type.target.value);
  };

  let editValueProduct = () => {
    console.log(image);

    if (nameValue !== "" && categoryValue !== "" && priceValue !== "") {
      let indexProduct = products.findIndex(
        (item, index) =>
          item.id === editClick.id && item.categoryId === editClick.categoryId
      );

      setProducts((prev) => [
        ...prev.slice(0, indexProduct),
        {
          categoryId: categories.find(
            (item) => item.categoryName === categoryValue
          ).id,
          id: editClick.id,
          productName: nameValue,
          price: priceValue,
          extra: extraValue,
          productImage: image ? image : editClick.productImage,
        },
        ...prev.slice(indexProduct + 1),
      ]);

      toggleDrawer("right", false)();

      setNameValue("");
      setPriceValue("");
      setCategoryValue("");
      setExtraValue("");
    } else {
      alert("Text kiriting !");
    }
  };

  let editProduct = (productItem) => {
    console.log("edit product", image);

    setEditClick(productItem);
    setNameValue(productItem.productName);
    setPriceValue(productItem.price);
    setCategoryValue(
      categories.find((item) => item.id === productItem.categoryId).categoryName
    );
    setExtraValue(productItem.extra ? productItem.extra : null);
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
            Maxsulotni ozgartirish
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
              Maxsulot nomi
            </Typography>

            <TextField
              value={nameValue}
              name="ism"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Maxsulot nomi . . ."
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
            <Box sx={{ minWidth: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Category-name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categoryValue}
                  placeholder="Kategoriya . . ."
                  name="category"
                  onChange={(e) => textEnter(e)}
                >
                  {categories.map((item, index) => (
                    <MenuItem key={index} value={item.categoryName}>
                      {item.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                top: "-7px",
              },
            }}
          >
            <Typography sx={{ mb: "15px", color: "#8D9BA8", fontSize: "15px" }}>
              Narxi
            </Typography>

            <TextField
              value={priceValue}
              name="price"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Narxi . . ."
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
              Narxi
            </Typography>

            <TextField
              value={extraValue}
              name="extra"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Qo’shimcha ma’lumot . . ."
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
              Surat yuklash uchun joy
            </Typography>
          </Box>
          <Box>
            <Box>
              <TextField
                type="file"
                id="imageEdit"
                onChange={(e) => addImageProduct(e)}
                style={{ display: "none" }}
              />
              {image ? (
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "167px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  alt=""
                  id="image"
                />
              ) : (
                <label htmlFor="imageEdit">
                  <Box
                    sx={{
                      width: "100%",
                      height: "167px",
                      borderRadius: "6px",
                      border: `1px dashed ${grey[500]}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: grey[500] }}>
                      Maxsulot rasmini yuklang
                    </Typography>
                  </Box>
                </label>
              )}
            </Box>

            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => editValueProduct()}
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
