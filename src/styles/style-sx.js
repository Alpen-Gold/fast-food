import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const buttonStyle = {
  bgcolor: "#20D472",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const titleStyle = {
  fontSize: "12px",
  fontWeight: 600,
  width: "100px",
};

export const BigCards = styled(Box)({
  display: "flex",

  justifyContent: "space-between",
});

export let disCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export let disBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export let topCardLest = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  bgcolor: "white",
  padding: "20px",
  m: " 0 5px",
};

export let topCardCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#EDEFF3",
  borderRadius: "30px",
  padding: "5px 2.5px",
};

export let topCardCenterLeft = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#EDEFF3",
  borderRadius: "30px",
  padding: "5px",
};

export const buttonStyleId = {
  bgcolor: "#20D472",
  width: "90px",
  height: "36px",
  borderRadius: "20px",
  display: "flex",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
};
