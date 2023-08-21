import { Box, TextField, Typography } from "@mui/material";
import { disBetween } from "../styles/style-sx";
import path from "../img/Path.png";
import { useContext, useEffect, useState } from "react";
import { ContextApi } from "../context/context";
import { red } from "@mui/material/colors";

let getFormattedCurrentTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes;
};

let _DrawerOrderCheck = (props) => {
  let {
    buyesProducts,
    setBuyesProducts,
    setOrders,
    orders,
    products,
    setProducts,
  } = useContext(ContextApi);
  let [nameValue, setNameValue] = useState("");
  let [numberValue, setNumberValue] = useState("");
  let [addresValue, setAddresValue] = useState("");
  let [buyOrders, setBuyOrders] = useState([]);
  let allSummaOrder = buyesProducts.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  let textEnter = (type) => {
    console.log(type.target.name);

    if (type.target.name === "ism") setNameValue(type.target.value);
    if (type.target.name === "number") setNumberValue(type.target.value);
    if (type.target.name === "addres") setAddresValue(type.target.value);
  };

  const lastOrderId = orders.reduce((maxId, currentOrder) => {
    return Math.max(maxId, currentOrder.id);
  }, -1);

  let addNewOrder = () => {
    if (
      nameValue !== "" &&
      numberValue !== "" &&
      addresValue !== "" &&
      buyesProducts.length !== 0
    ) {
      setOrders((prev) => [
        ...prev,

        {
          id: lastOrderId + 1,
          name: nameValue,
          phone: numberValue,
          time: getFormattedCurrentTime(),
          productsPrice: allSummaOrder,
          delivery: true,
          location: addresValue,
          totalSum: allSummaOrder + 5000,
          operator: "Komilova M",
          flial: "Fast Food Maksim Gorkiy",
          status: "new",
          orders: buyesProducts,
        },
      ]);

      setNameValue("");
      setNumberValue("");
      setAddresValue("");

      props.toggleDrawer("right", false)();
      console.log(orders, "orders");
    } else {
      alert("Text Kiriting yoki Mahsulot tanlang !");
    }

    setBuyesProducts([]);
  };
  return (
    <>
      <Typography variant="text">Buyurtma ro’yxati</Typography>

      {buyesProducts.length !== 0 && (
        <Box
          sx={{
            bgcolor: "#edeff3",
            borderRadius: "6px",
            padding: "10px",
            mt: "10px",
          }}
        >
          {buyesProducts.map((item, index) => {
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
                <Typography variant="text">{item.name}</Typography>
                <Typography>
                  {item.count}*{item.price} UZS
                </Typography>
              </Box>
            );
          })}

          <Box
            sx={{
              mt: "70px",
            }}
          >
            <Typography sx={{ color: "#8D9BA8", fontSize: "11px" }}>
              Umumiy summa
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {allSummaOrder !== 0 ? allSummaOrder : ""}
              <span style={{ fontWeight: 300 }}>
                {allSummaOrder !== 0 ? "UZS" : ""}
              </span>
            </Typography>
          </Box>
        </Box>
      )}
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
          Mijoz ismi
        </Typography>

        <TextField
          value={nameValue}
          name="ism"
          type="text"
          sx={{ minWidth: "100%" }}
          id="outlined-basic"
          label="Ism . . ."
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
          Telefon raqam
        </Typography>

        <TextField
          value={numberValue}
          name="number"
          sx={{ minWidth: "100%" }}
          id="outlined-basic"
          label="Telefon raqam . . ."
          onChange={(e) => textEnter(e)}
          variant="outlined"
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
          Manzil
        </Typography>

        <TextField
          value={addresValue}
          name="addres"
          sx={{ minWidth: "100%" }}
          id="outlined-basic"
          label="Manzil . . ."
          variant="outlined"
          onChange={(e) => textEnter(e)}
        />
      </Box>
      <Box>
        {addresValue ? (
          <iframe
            src={addresValue}
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
          onClick={() => {
            addNewOrder();
          }}
        >
          Saqlash
        </button>
      </Box>
    </>
  );
};

export default _DrawerOrderCheck;
