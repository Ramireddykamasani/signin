export const styles = {
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#F5BF45",
    },
    image: {
      width: "300px",
      height: "650px",
      objectFit: "contain",
      animation: "rotate 2s linear ",
      "@keyframes rotate": {
        "0%": {
          opacity: "0",
          width: "0px",
        },
        "100%": {
          opacity: "1",
          width: "300px",
        },
      },
    },
  };