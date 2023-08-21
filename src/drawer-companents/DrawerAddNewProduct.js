import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { disBetween } from "../styles/style-sx";
import { useContext, useEffect, useState } from "react";
import { ContextApi } from "../context/context";
import { grey, red } from "@mui/material/colors";

let _DrawerAddNewProduct = (props) => {
  let {
    buyesProducts,
    setBuyesProducts,
    setOrders,
    orders,
    products,
    setProducts,
    categories,
    setCategories,
  } = useContext(ContextApi);
  let [nameValue, setNameValue] = useState("");
  let [categoryValue, setCategoryValue] = useState("");
  let [priceValue, setPriceValue] = useState("");
  let [extraValue, setExtraValue] = useState("");
  let [buyOrders, setBuyOrders] = useState([]);
  let [image, setImage] = useState(null);
  let allSummaOrder = buyesProducts.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  let addImageProduct = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  let textEnter = (type) => {
    console.log(type.target.value);

    if (type.target.name === "ism") setNameValue(type.target.value);
    if (type.target.name === "category") setCategoryValue(type.target.value);
    if (type.target.name === "price") setPriceValue(type.target.value);
    if (type.target.name === "extra") setExtraValue(type.target.value);
  };

  const lastOrderId = products.reduce((maxId, currentOrder) => {
    return Math.max(maxId, currentOrder.id);
  }, -1);

  let addNewProduct = () => {
    if (
      nameValue !== "" &&
      categoryValue !== "" &&
      priceValue !== "" &&
      image !== ""
    ) {
      let idCategory = categories.find(
        (item) => item.categoryName === categoryValue
      ).id;
      setProducts((prev) => [
        ...prev,
        {
          categoryId: idCategory,
          id: lastOrderId + 1,
          productName: nameValue,
          price: priceValue,
          extra: extraValue,
          productImage: image,
        },
      ]);

      props.toggleDrawer("right", false)();

      setNameValue("");
      setPriceValue("");
      setImage("");
      setCategoryValue("");
    } else {
      alert("Text kiriting !");
    }
  };

  return (
    <>
      <Typography variant="text" sx={{ fontSize: "16px" }}>
        Yangi maxsulot qo’shish
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
          label="Maxsulot nomi . . ."
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
          Kategoriya
        </Typography>

        <Box sx={{ minWidth: "100%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category-name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoryValue}
              label="Kategoriya . . ."
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
            top: "-5px",
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
          label="Narxi . . ."
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
          Qo’shimcha ma’lumot
        </Typography>

        <TextField
          value={extraValue}
          name="extra"
          sx={{ minWidth: "100%" }}
          id="outlined-basic"
          label="Qo’shimcha ma’lumot . . ."
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
          Qo’shimcha ma’lumot
        </Typography>

        <TextField
          type="file"
          id="imgeSend"
          onChange={(e) => addImageProduct(e)}
          sx={{ display: "none" }}
        />
      </Box>
      <Box>
        <Box>
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
            <label htmlFor="imgeSend">
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
          onClick={() => addNewProduct()}
        >
          Saqlash
        </button>
      </Box>
    </>
  );
};

export default _DrawerAddNewProduct;
