import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BigCards, topCardCenter } from "../styles/style-sx";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { ContextApi } from "../context/context";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

// Component
import _DrawerNewProduct from "../drawer-companents/DrawerNewProduct";
import _DrawerEditProduct from "../drawer-companents/DrawerEditProduct";

export default function _Product() {
  // State for search input
  let [searchValue, setSearchValue] = useState("");

  // Extracting data from context
  let { products, setProducts } = useContext(ContextApi);

  // Function to delete a product
  let deleteProduct = (productItem) => {
    let indexProduct = products.findIndex(
      (item) =>
        item.id === productItem.id && item.categoryId === productItem.categoryId
    );

    setProducts((prev) => [
      ...prev.slice(0, indexProduct),
      ...prev.slice(indexProduct + 1),
    ]);
  };

  const columns = [
    // Product Image and Name
    {
      field: "productImage",
      headerName: "Maxsulot",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={params.formattedValue}
            alt="Rasm"
            style={{
              width: 40,
              height: 40,
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <Typography>{params.row.productName}</Typography>
        </Box>
      ),
    },
    // Product Price
    {
      field: "price",
      headerName: "Narxi",
      flex: 1,
      renderCell: (params) => {
        return <Typography>{params.row.price} UZS</Typography>;
      },
    },
    // Action Column with Edit and Delete buttons
    {
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box sx={topCardCenter}>
            <_DrawerEditProduct productItem={params.row}></_DrawerEditProduct>
          </Box>

          <Box sx={topCardCenter}>
            <Box padding={" 0 2.5px"} onClick={() => deleteProduct(params.row)}>
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
      {/* Big Cards Section */}
      <BigCards>
        <_DrawerNewProduct />

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
      {/* DataGrid Section */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products.filter((item) => {
            return item.productName
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
