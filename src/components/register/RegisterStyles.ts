const styles = {
  reigstergif: {
    width: "40%",
    display: { xs: "none", sm: "flex" },
    justifyContent: "center",
    alignItems: "center",
  },
  textFeildContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "50%",
  },

  image: {
    width: "100%",
  },
  registerContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  reigister: {
    width: "100%",
    height: "8vh",
    background: "#F5BF45",
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textFeild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  error: {
    fontFamily: "Montserrat Alternates",
    fontSize: "13px",
    fontWeight: "600",
    color: "#F91E00",
  },
  input: {
    marginTop: "20px",
    "& .MuiFormHelperText-root": {
      fontSize: "1rem",
      color: "#F91E00",
    },

    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "30px",
    "& .MuiFormLabel-root": {
      color: "#18161B",
      fontSize: "15px",
      textTransform: "none",
    },
    "& .MuiInputLabel-shrink": {},

    "& label.Mui-focused": {
      textTransform: "none",
      color: "#18161B",
      transform: "translate(24px, -7px) scale(.8)",
      background: "#FFF",
      display: "block",
      fontSize: "18px",
      fontWeight: "600",
      marginRight: "2px",
    },
    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ": {
      color: "#A9A9A9",
      fontFamily: "Poppins",
      fontSize: "18px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #18161B",
        borderRadius: "30px",
      },
      "&:hover fieldset": {
        border: "2px solid #18161B",
        borderWidth: "0.15rem",
      },
    },
  },
};
export default styles;
