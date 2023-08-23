import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BigCards, topCardCenter } from "../styles/style-sx";
import { Box, Typography } from "@mui/material";
import { ContextApi } from "../context/context";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

// companent
import _DrawerNewProduct from "../drawer-companents/DrawerNewProduct";
import _DrawerEditProduct from "../drawer-companents/DrawerEditProduct";
import _DrawerNewFleal from "../drawer-companents/DrawerNewFleal";
import _DrawerEditFleal from "../drawer-companents/DarwerEditFleal";
import _DrawerAddNewCo_ints from "../drawer-companents/DrawerAddNewCo-ints";

export default function _Complaints_Opinions() {
  // Context ma'lumotlarni olish
  let { complaintsOpinions, setComplaintsOpinions } = useContext(ContextApi);

  // Funksiya: Fikrlarni o'chirish
  let deleteComplaintsOpinions = (complaintsOpinionsItem) => {
    let indexCustomer = complaintsOpinions.findIndex(
      (item) => item.id === complaintsOpinionsItem.id
    );

    setComplaintsOpinions((prev) => [
      ...prev.slice(0, indexCustomer),
      ...prev.slice(indexCustomer + 1),
    ]);
  };

  // DataGrid ustunlari
  const columns = [
    {
      field: "name",
      headerName: "Kimdan",
      flex: 1,
    },
    {
      field: "turi",
      headerName: "Turi",
      flex: 1,
    },
    {
      field: "comment",
      headerName: "Comment",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography>{params.row.comment.slice(0, 10)}...</Typography>
        </Box>
      ),
    },
    {
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* O'chirish tugmasi */}
          <Box sx={topCardCenter}>
            <Box
              padding={" 0 2.5px"}
              onClick={() => deleteComplaintsOpinions(params.row)}
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

  // JSX asosiy qismi
  return (
    <>
      {/* Fikrlarni qo'shish oynasi */}
      <BigCards>
        <_DrawerAddNewCo_ints />
        {/* Izoh: Fikrlarni qidirish uchun oynani qo'shing */}
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
        ></Box>
      </BigCards>

      {/* Fikrlar ro'yxati */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={complaintsOpinions}
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
