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
              <NavLink to={"/orders"}>
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
                      <img src={checkCircle} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText
                    primary="Buyurtmalar"
                    sx={{ color: "#2D3A45" }}
                  />
                </ListItemButton>
              </NavLink>

              <NavLink to={"/product"}>
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
                      <img src={archive} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText
                    primary="Maxsulotlar"
                    sx={{ color: "#2D3A45" }}
                  />
                </ListItemButton>
              </NavLink>

              <NavLink to={"/category"}>
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
                      <img src={layers} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText
                    primary="Kategoriyalar"
                    sx={{ color: "#2D3A45" }}
                  />
                </ListItemButton>
              </NavLink>

              <NavLink to={"/fleal"}>
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
                      <img src={mapPin} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText primary="Filiallar" sx={{ color: "#2D3A45" }} />
                </ListItemButton>
              </NavLink>

              <NavLink to={"/customers"}>
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
                      <img src={users} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText primary="Mijozlar" sx={{ color: "#2D3A45" }} />
                </ListItemButton>
              </NavLink>

              <NavLink to={"/report"}>
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
                      <img src={barChart2} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText primary="Xisobot" sx={{ color: "#2D3A45" }} />
                </ListItemButton>
              </NavLink>

              <NavLink to={"/employees"}>
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
                      <img style={{ opacity: "0.6" }} src={group} alt="" />
                    </span>
                  </ListItemIcon>
                  <ListItemText primary="Hodimlar" sx={{ color: "#2D3A45" }} />
                </ListItemButton>
              </NavLink>

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
