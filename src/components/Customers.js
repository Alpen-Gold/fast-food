import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  BigCards,
  buttonStyle,
  titleStyle,
  topCardCenter,
  topCardLest,
} from "../styles/style-sx";
import { Box, Button, TextField, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import Group2128 from "../img/Group 2128.png";
import SearchIcon from "@mui/icons-material/Search";
import { ContextApi } from "../context/context";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";

// companent
import _DrawerNewProduct from "../drawer-companents/DrawerNewProduct";
import _DrawerEditProduct from "../drawer-companents/DrawerEditProduct";
import _DrawerNewFleal from "../drawer-companents/DrawerNewFleal";
import _DrawerEditFleal from "../drawer-companents/DarwerEditFleal";
import _DrawerCustomer from "../drawer-companents/DrawerCustomer";

export default function _Customers() {
  let [searchValue, setSearchValue] = useState("");

  let { fleals, setFleals, customers, setCustomers } = useContext(ContextApi);

  let deleteCostomer = (customerItem) => {
    let indexCustomer = customers.findIndex(
      (item) => item.id === customerItem.id
    );

    setCustomers((prev) => [
      ...prev.slice(0, indexCustomer),
      ...prev.slice(indexCustomer + 1),
    ]);
  };

  let clickTypeActive = (costomerItem) => {
    setCustomers((prev) =>
      prev.map((item) => {
        if (item.id === costomerItem.id) {
          return {
            ...item,
            isActive: costomerItem.isActive === true ? false : true,
          };
        }
        return item;
      })
    );
  };

  const columns = [
    {
      field: "name",
      headerName: "Mijoz ismi",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Telefon raqam",
      flex: 1,
    },
    {
      field: "buyCount",
      headerName: "Buyurtmalar soni",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 500,
              width: "50%",
            }}
          >
            {params.row.buyCount ? params.row.buyCount : "-"}
          </Typography>
        );
      },
    },

    {
      field: "isActive",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              color: `${params.row.isActive ? "#20D472" : "#FA2738"}`,
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {params.row.isActive ? "Active" : "Block"}
          </Typography>
        );
      },
    },
    {
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box sx={topCardCenter}>
            <Box padding={" 0 2.5px"}>
              <button
                className={"ordersBtnTopLeftActive"}
                style={{ cursor: "pointer" }}
                onClick={() => clickTypeActive(params.row)}
              >
                {params.row.isActive ? (
                  <BlockIcon sx={{ color: grey[700] }}></BlockIcon>
                ) : (
                  <CheckCircleOutlineTwoToneIcon
                    sx={{ color: grey[700] }}
                  ></CheckCircleOutlineTwoToneIcon>
                )}
              </button>
            </Box>
          </Box>

          <Box sx={topCardCenter}>
            <_DrawerCustomer
              customerItem={params.row}
              type={"icon"}
            ></_DrawerCustomer>
          </Box>

          <Box sx={topCardCenter}>
            <Box
              padding={" 0 2.5px"}
              onClick={() => deleteCostomer(params.row)}
            >
              <button
                className={"ordersBtnTopLeftActive"}
                style={{ cursor: "pointer" }}
              >
                <DeleteIcon sx={{ color: grey[700] }}></DeleteIcon>
              </button>
            </Box>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <>
      <BigCards>
        <_DrawerCustomer type={"new"} />

        <Box
          sx={{
            backgroundColor: "white",
            flex: 1,
            padding: "20px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <Box sx={topCardCenter}>
            <Box sx={{ padding: " 0 10px" }}>
              <input
                value={searchValue}
                type="text"
                style={{
                  border: "none",
                  padding: "10px 5px",
                  backgroundColor: "#EDEFF3",
                  outline: "none",
                  fontSize: "13px",
                }}
                placeholder="Qidirish"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Box>
            <SearchIcon sx={{ mr: "10px", color: grey[400] }}></SearchIcon>
          </Box>
        </Box>
      </BigCards>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={customers.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          sx={{
            padding: "0 30px",

            "& .MuiDataGrid-row": {
              backgroundColor: "white",
              my: "5px",
              borderRadius: "6px",
              "&:hover": {
                zIndex: "99",
                backgroundColor: "white",
                boxShadow: "0px 20px 25px 0px rgba(176, 177, 181, 0.43)",
              },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
}
