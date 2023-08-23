import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";

// image
import imgLogo from "../img/Bitmap.png";
import { FiCheckCircle } from "react-icons/fi";
import { BsArchive } from "react-icons/bs";
import { BiLayer } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";

const _Leyaut = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        {/* Sidebar */}
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
            {/* Logo and Branding */}
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
                alt="Fast Food Logo"
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

            {/* Sidebar Menu */}
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
                // Buyurtmalar
                {
                  text: "Buyurtmalar",
                  icon: <FiCheckCircle className="menuIcon" />,
                  path: "orders",
                },
                // Maxsulotlar
                {
                  text: "Maxsulotlar",
                  icon: <BsArchive className="menuIcon" />,
                  path: "product",
                },
                // Kategoriyalar
                {
                  text: "Kategoriyalar",
                  icon: <BiLayer className="menuIcon" />,
                  path: "category",
                },
                // Filiallar
                {
                  text: "Filiallar",
                  icon: <CiLocationOn className="menuIcon" />,
                  path: "fleal",
                },
                // Mijozlar
                {
                  text: "Mijozlar",
                  icon: <FiUsers className="menuIcon" />,
                  path: "customers",
                },
                // Xisobot
                {
                  text: "Xisobot",
                  icon: <FiBarChart2 className="menuIcon" />,
                  path: "report",
                },
                // Shikoyat va fikrlar
                {
                  text: "Shikoyat va fikrlar",
                  icon: <AiOutlineCloseSquare className="menuIcon" />,
                  path: "complaints-opinions",
                },
                // Xarita
                {
                  text: "Xarita",
                  icon: <CiLocationArrow1 className="menuIcon" />,
                  path: "location",
                },
                {
                  text: "Lavozimlar",
                  icon: <FiSettings className="menuIcon" />,
                  path: "position",
                },
              ].map((item) => (
                <NavLink to={item.path} key={item.text}>
                  <ListItemButton sx={{ pl: "30px", my: "5px" }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ color: "#2D3A45" }}
                    />
                  </ListItemButton>
                </NavLink>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Main Content */}
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
            {/* Outlet for rendering nested routes */}
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default _Leyaut;
