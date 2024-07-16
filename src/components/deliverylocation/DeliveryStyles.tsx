export const styles = {
  error:{
    color:'red',
    fontSize: { xs: "14px", sm: "17px" },
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontWeight: "500",
  },
  close: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px",
    boxSizing: "border-box",
  },
  map: { color: "red", marginRight: "5px" },
  arrow: { color: "red", width: "50px", height: "50px" },
  container: {
    width: { xs: "100%", sm: "100%" },
    height: "30vh",
    alignItems: "center",
    justifyContent: { xs: "none", sm: "center" },
    gap: { xs: "30px", sm: "20px" },
    textAlign: "center",
    padding: { xs: "30px 0px", sm: "0px 0px" },
  },
  input: {
    width: { xs: "90%", sm: "40%" },
    "& .MuiOutlinedInput-input": {
      color: "#000000",
    },
    "& .MuiInputLabel-root": {
      color: "#000000",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
      borderRadius: "50px",
      boxShadow: "1px 1px  7px 2px silver",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#000000",
    },
    "&:hover .MuiInputLabel-root": {
      color: "#000000",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#000000",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000000",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
    },
  },
  title: {
    color: "#000000",
    fontSize: { xs: "18px", sm: "20px" },
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontWeight: "600",
  },
  text: {
    color: "#A9A9A9",
    fontSize: { xs: "14px", sm: "17px" },
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontWeight: "500",
  },
};
