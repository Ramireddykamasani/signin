export const styles = {
    error: {
      color: "#F62B2A",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    icon: {
      color: "gray",
    },
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
      height: "36vh",
      background: "#F5BF45",
      width: "100%",
      justifyContent: "center",
    },
    title: {
      marginBottom: "20px",
      fontSize: "20px",
      fontWeight: "600",
    },
    button: {
      width: "260px",
      textAlign: "center",
      background: "#F62B2A",
      borderRadius: "30px",
      padding: "13px 10px",
      color: "#FFF",
      textTransform: "none",
      letterSpacing: "1px",
      fontWeight: "bold",
      fontSize: "16px",
      ":hover": {
        background: "#F62B2A",
      },
    },
    textFeild: {
      "& .MuiFormHelperText-root": {
        fontSize: "1rem",
        color: "#F91E00",
      },
  
      marginBottom: "10px",
      backgroundColor: "#fff",
      borderRadius: "30px",
      "& .MuiFormLabel-root": {
        color: "#gray",
        fontSize: "15px",
        textTransform: "none",
      },
  
      "& label.Mui-focused": {
        textTransform: "capitalize",
        fontSize: "15px",
      },
  
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
          minWidth: "250px",
          maxWidth: "260px",
        },
        "&:hover fieldset": {
          borderColor: "none",
          borderWidth: "0.15rem",
        },
      },
    },
  };