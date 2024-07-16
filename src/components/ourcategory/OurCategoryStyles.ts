export const styles = {
  input: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  stack: {
    width: { xs: "45%", sm: "18%", md: "15%", lg: "8%" },
    margin: "10px 0px",
    gap: { xs: "10px", lg: "20px" },
    textAlign: "center",
    padding: "10px",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  },
  seaerchFeild: {
    width: "100%",
    marginTop: "-30px",
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-input": {
      color: "none",
    },
    "& .MuiInputLabel-root": {
      color: "red",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      boxShadow: "2px 2px 1px silver",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "grey",
    },
    "&:hover .MuiInputLabel-root": {
      color: "grey",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  seaerchFeild1: {
    borderRight:'1px solid silver',
    width: "65%",
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-input": {
      color: "none",
    },
    "& .MuiInputLabel-root": {
      color: "red",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      // boxShadow: "2px 2px 1px silver",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "grey",
    },
    "&:hover .MuiInputLabel-root": {
      color: "grey",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  pincode: {
    width: "35%",
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-input": {
      color: "none",
    },
    "& .MuiInputLabel-root": {
      color: "red",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      // boxShadow: "2px 2px 1px silver",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "grey",
    },
    "&:hover .MuiInputLabel-root": {
      color: "grey",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  pinContainer:{
      boxShadow: "2px 2px 1px silver",
      marginBottom:'10px'
  }
};
