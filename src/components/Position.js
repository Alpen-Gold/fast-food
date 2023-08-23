import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BigCards, topCardCenter } from "../styles/style-sx";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ContextApi } from "../context/context";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

// companent
import _DrawerPosition from "../drawer-companents/DrawerPosition";

export default function _Position() {
  let [searchValue, setSearchValue] = useState("");

  let { position, setPosition } = useContext(ContextApi);

  let deletePosition = (positionItem) => {
    let indexPosition = position.findIndex(
      (item) => item.id === positionItem.id
    );

    setPosition((prev) => [
      ...prev.slice(0, indexPosition),
      ...prev.slice(indexPosition + 1),
    ]);
  };

  const columns = [
    {
      field: "name",
      headerName: "Fio",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Telefon raqam",
      flex: 1,
    },
    {
      field: "position",
      headerName: "Lavozim",
      flex: 1,
    },

    // Action ustuni
    {
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Lavozimni tahrirlash uchun DrawerPosition komponenti */}
          <Box sx={topCardCenter}>
            <_DrawerPosition
              type="edit"
              positionItem={params.row}
            ></_DrawerPosition>
          </Box>

          {/* Lavozimni o'chirish */}
          <Box sx={topCardCenter}>
            <Box
              padding={" 0 2.5px"}
              onClick={() => deletePosition(params.row)}
            >
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
      {/* Lavozim qo'shish uchun DrawerPosition komponenti */}
      <BigCards>
        <_DrawerPosition type="new" />
        {/* Qidirish input va button */}
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
            <SearchIcon sx={{ mr: "10px" }}></SearchIcon>
          </Box>
        </Box>
      </BigCards>

      {/* Lavozimlar DataGrid */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={position.filter((item) => {
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
