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

// companent
import _DrawerNewProduct from "../drawer-companents/DrawerNewProduct";
import _DrawerEditProduct from "../drawer-companents/DrawerEditProduct";
import _DrawerNewFleal from "../drawer-companents/DrawerNewFleal";
import _DrawerEditFleal from "../drawer-companents/DarwerEditFleal";

export default function _Fleal() {
  let [searchValue, setSearchValue] = useState("");

  let { fleals, setFleals } = useContext(ContextApi);

  let deleteFleal = (productItem) => {
    let indexFleal = fleals.findIndex(
      (item, index) => item.id === productItem.id
    );

    setFleals((prev) => [
      ...prev.slice(0, indexFleal),
      ...prev.slice(indexFleal + 1),
    ]);
  };

  const columns = [
    {
      field: "flealName",
      headerName: "Filial nomi (UZ)",
      flex: 1,
    },
    {
      field: "flealNameRu",
      headerName: "Filial nomi (Ru)",
      flex: 1,
      renderCell: (params) => {
        return params.row.flealNameRu ? params.row.flealNameRu : "-";
      },
    },
    {
      field: "modjal",
      headerName: "Mo’ljal",
      flex: 1,
      renderCell: (params) => {
        return params.row.modjal ? `${params.row.modjal.slice(0, 15)}...` : "-";
      },
    },

    {
      field: "startWork",
      headerName: "Vaqti",
      flex: 1,
      renderCell: (params) => {
        return `${params.row.startWork} - ${params.row.endWork}`;
      },
    },
    {
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box sx={topCardCenter}>
            <Box padding={" 0 2.5px"}>
              <a
                target="_blank"
                href="https://www.google.com/maps"
                style={{ color: "black" }}
              >
                <button
                  className={"ordersBtnTopLeftActive"}
                  style={{ cursor: "pointer" }}
                >
                  <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                </button>
              </a>
            </Box>
          </Box>

          <Box sx={topCardCenter}>
            <_DrawerEditFleal productItem={params.row}></_DrawerEditFleal>
          </Box>

          <Box sx={topCardCenter}>
            <Box padding={" 0 2.5px"} onClick={() => deleteFleal(params.row)}>
              <button
                className={"ordersBtnTopLeftActive"}
                style={{ cursor: "pointer" }}
              >
                <DeleteIcon></DeleteIcon>
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
        <_DrawerNewFleal />

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
          rows={fleals.filter((item) => {
            return item.flealName
              .toLowerCase()
              .includes(searchValue.toLowerCase());
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
