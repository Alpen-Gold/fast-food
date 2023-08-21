import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { grey } from "@mui/material/colors";

// image
import imgLogo from "../img/Bitmap.png";
import checkCircle from "../img/check-circle.svg";
import archive from "../img/archive.svg";
import layers from "../img/layers.svg";
import mapPin from "../img/map-pin.svg";
import users from "../img/users.svg";
import barChart2 from "../img/bar-chart-2.svg";
import group from "../img/Group.svg";

const _Leyaut = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid
          xs={4}
          sx={{
            height: "100vh",
            width: "20%",
            backgroundColor: "white",
            overflowY: "auto",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "20px",
              }}
            >
              <img
                src={imgLogo}
                alt=""
                style={{
                  width: "70px",
                  height: "70px",
                  flexShrink: 0,
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                  Fast Food
                </Typography>
                <Typography sx={{ color: grey[500], fontSize: "12px" }}>
                  Online maxsulot sotuvi
                </Typography>
              </Box>
            </Box>

            <List
              sx={{
                borderLeft: "5px solid #FCB600",
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",

                pr: "20px",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {[
                { text: "Buyurtmalar", icon: checkCircle, path: "orders" },
                { text: "Maxsulotlar", icon: archive, path: "product" },
                { text: "Kategoriyalar", icon: layers, path: "category" },
                { text: "Filiallar", icon: mapPin, path: "fleal" },
                { text: "Mijozlar", icon: users, path: "customers" },
                { text: "Xisobot", icon: barChart2, path: "report" },
                { text: "Hodimlar", icon: group, path: "employees" },
              ].map((item) => (
                <NavLink to={item.path}>
                  <ListItemButton sx={{ pl: "30px" }}>
                    <ListItemIcon>
                      <span
                        className="bg-icon"
                        style={{
                          backgroundColor: "#F6F6F6",
                          width: "36px",
                          height: "36px",
                          borderRadius: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: 0,
                        }}
                      >
                        <img src={item.icon} alt="" />
                      </span>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ color: "#2D3A45" }}
                    />
                  </ListItemButton>
                </NavLink>
              ))}

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Grid>
        <Grid
          xs={8}
          sx={{
            height: "100vh",
            width: "80%",
            backgroundColor: "#EDEFF3",
            overflowY: "auto",
          }}
        >
          <Box>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default _Leyaut;
