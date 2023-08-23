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
  NativeSelect,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// data and image and companent
import { ContextApi } from "../context/context";

export default function _DrawerAddNewCo_ints(props) {
  let { complaintsOpinions, setComplaintsOpinions } = useContext(ContextApi);
  const [nameValue, setNameValue] = React.useState("");
  const [turiValue, setTuriValue] = React.useState("");
  const [commentValue, setCommentValue] = React.useState("");

  let textEnter = (e) => {
    if (e.target.name === "ism") setNameValue(e.target.value);
    if (e.target.name === "comment") setCommentValue(e.target.value);
  };

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

  let addNewProduct = () => {
    const lastId = complaintsOpinions.reduce(
      (maxId, { id }) => Math.max(maxId, id),
      0
    );
    if (nameValue !== "" && commentValue !== "") {
      setComplaintsOpinions((prev) => [
        ...prev,
        {
          id: lastId + 1,
          turi: turiValue === "" ? "Shikoyat" : turiValue,
          name: nameValue,
          comment: commentValue,
        },
      ]);

      setNameValue("");
      setCommentValue("");
      setTuriValue("");
      toggleDrawer("right", false)();
    } else {
      alert("text entered");
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
            Yangi qo’shish
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
              Ism kiriting
            </Typography>

            <TextField
              value={nameValue}
              name="ism"
              type="text"
              sx={{ minWidth: "100%" }}
              id="outlined-basic"
              placeholder="Ism kiriitng . . ."
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
                  onChange={(e) => setTuriValue(e.target.value)}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={"Shikoyat"}>Shikoyat</option>
                  <option value={"Takliflar"}>Takliflar</option>
                </NativeSelect>
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
            <Typography sx={{ color: "#8D9BA8", fontSize: "15px" }}>
              Turi boyicha malumot bering
            </Typography>

            <textarea
              value={commentValue}
              name="comment"
              type="text"
              style={{
                width: "100%",
                height: "167px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              id="outlined-basic"
              placeholder="Turi boyicha malumot kiriitng . . ."
              variant="outlined"
              onChange={(e) => textEnter(e)}
            />
          </Box>

          <Box>
            <button
              className="all-button"
              style={{ fontSize: "20px", marginTop: "15px" }}
              onClick={() => addNewProduct()}
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
        <Typography sx={titleStyle}>Yangi qo’shish</Typography>
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
