import React from "react";

export const containerStyle: React.CSSProperties = {
  background: "#23c0cf",
  color: "#fff",
  width: "140px",
  height: "45px",
  display: "inline-flex",
  padding: "0px 3px 0px 3px",
  alignItems: "center",
  borderRadius: "25px",
  justifyContent: "center",
  fontFamily: "Lato",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};
export const h3Styles: React.CSSProperties = {
  fontFamily: "Lato",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  borderBottom: "1px solid #000",
  textAlign: "center",
};
export const logoImageStyle: React.CSSProperties = {
  width: "45px",
  height: "100%",
  objectFit: "fill",
  marginRight: "3px",
  position: "absolute",
  left: 0,
};

export const headingStyle: React.CSSProperties = {
  fontFamily: "Lato",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
};

export const DefaultContainer: React.CSSProperties = {
  width: "250px",
  height: "110px",
  background: "#F0F0F0",
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: "20px",
  justifyContent: "center",
};
export const defaultContainerContent: React.CSSProperties = {
  width: "175px",
  height: "50%",
  color: "#23C0CF",
  justifyContent: "flex-start",
  alignItems: "center",
  display: "flex",
  gap: "8px",
  flexDirection: "column",
};

export const triangleTopLeft: React.CSSProperties = {
  width: 0,
  height: 0,
  borderLeft: "52px solid #23C0CF",
  borderBottom: "56.5px solid transparent",
  position: "absolute",
  top: 0,
  left: 0,
  filter: "drop-shadow(-1px 1px 5px rgba(0, 0, 0, 0.55))",
  borderTopLeftRadius: "20px",
};

export const triangleBottomRight: React.CSSProperties = {
  width: 0,
  height: 0,
  borderRight: "52px solid #23C0CF",
  borderTop: "56.5px solid transparent",
  position: "absolute",
  bottom: 0,
  right: 0,
  filter: "drop-shadow(-1px 1px 5px rgba(0, 0, 0, 0.55))",
  borderBottomRightRadius: "20px",
};

export const CheckAiButton: React.CSSProperties = {
  width: "140px",
  height: "25px",
  flexShrink: 0,
  borderRadius: "25px",
  border: "0.2px solid rgba(0, 0, 0, 0.35)",
  background: "#23C0CF",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  cursor: "pointer",
};
export const UploadImageIcon: React.CSSProperties = {
  width: "25px",
  height: "25px",
  flexShrink: 0,
  borderRadius: "25px",
  border: "0.2px solid rgba(0, 0, 0, 0.35)",
  background: "#23C0CF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};
