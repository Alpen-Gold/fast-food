import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { buttonStyle, titleStyle, topCardLest } from "../styles/style-sx";
import { Typography } from "@mui/material";

// data and image and component
import _DrawerAddNewProduct from "./DrawerAddNewProduct";

export default function _DrawerProduct(props) {
  // State for handling the drawer open/close
  const [state, setState] = React.useState({
    right: false,
  });

  // Function to toggle the drawer
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

  // Content of the drawer
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
          {/* Using the component to add a new product */}
          <_DrawerAddNewProduct toggleDrawer={toggleDrawer} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {/* Button to open the drawer */}
      <Box sx={topCardLest} onClick={toggleDrawer("right", true)}>
        <Button>
          <Box sx={buttonStyle}>
            <Typography sx={{ fontSize: "28px", color: "white" }}>+</Typography>
          </Box>
        </Button>
        <Typography sx={titleStyle}>Yangi maxsulot qo’shish</Typography>
      </Box>
      {/* The SwipeableDrawer component */}
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
