import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BigCards, topCardCenter } from "../styles/style-sx";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { ContextApi } from "../context/context";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

// companent
import _DrawerNewProduct from "../drawer-companents/DrawerNewProduct";
import _DrawerAddNewCa_ry from "../drawer-companents/DrawerCa_ry";
import _DrawerEditProduct from "../drawer-companents/DrawerEditProduct";
import _DrawerEditCa_ry from "../drawer-companents/DraverEditCa_ry";

export default function _Category() {
  // Qidirish inputning holati uchun lokal tilovat
  let [searchValue, setSearchValue] = useState("");

  // Context dan kerakli ma'lumotlarni olish
  let { categories, setCategories, setProducts } = useContext(ContextApi);

  // Kategoriya o'chirish funksiyasi
  let deleteCategory = (categoryIndex) => {
    console.log("delete Category !", categoryIndex);

    let indexActive = categories.findIndex(
      (item) => item.id === categoryIndex.id
    );

    setCategories((prev) => [
      ...prev.slice(0, indexActive),
      ...prev.slice(indexActive + 1),
    ]);

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.categoryId !== categoryIndex.id)
    );
  };

  // DataGrid ustunlari
  const columns = [
    {
      field: "categoryName",
      headerName: "Kategoriya (UZ)",
      flex: 1,
    },
    {
      field: "categoryNameRu",
      headerName: "Kategoriya (RU)",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography>
            {params.row.categoryNameRu ? params.row.categoryNameRu : "-"}
          </Typography>
        );
      },
    },
    {
      field: "bigCategoryId",
      headerName: "Bosh kategoriya",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography>
            {params.row.bigCategoryId ? params.row.bigCategoryId : "-"}
          </Typography>
        );
      },
    },

    {
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Tahrirlash komponenti */}
          <Box sx={topCardCenter}>
            <_DrawerEditCa_ry categoryItem={params.row}></_DrawerEditCa_ry>
          </Box>

          {/* O'chirish tugmasi */}
          <Box sx={topCardCenter}>
            <Box
              padding={" 0 2.5px"}
              onClick={() => deleteCategory(params.row)}
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
      {/* Kategoriya qo'shish oynasi */}
      <BigCards>
        <_DrawerAddNewCa_ry />
        {/* Qidirish input va SearchIcon */}
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

      {/* Kategoriya ro'yxati */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={categories.filter((item) => {
            return item.categoryName
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
