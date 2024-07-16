export const styles = {
    Conatiner: {
      width: "100%",
      height: {xs:'50vh',sm:'80vh'},
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      overflow: "scroll",
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
    cardsStack:{
  width:'100%',
  flexDirection:{xs:'column',sm:'row'}
    },
    amountContainer: {
      padding: "10px",
      width: "91%",
      gap: "10px",
    },
    subtotalConatiner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "0.5px solid #C4C4C4",
      padding: "10px 0px",
      color: "#000000",
    },
    text: {
      color: "#99959E",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "Poppins",
    },
    subtotalPrice: {
      color: "#F62B2A",
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Poppins",
    },
    cost: {
      color: "#000000",
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Poppins",
    },
  
    buttons: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      background: "#F5BF45",
      padding: "5px 5px",
      borderRadius: "20px",
    },
    count: {
      padding: "0px 10px",
      color: "#000000",
      fontSize: "16px",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
      fontWeight: "600",
    },
    btnContainer: {
      display: "flex",
      gap: "20px",
    },
    stack: {
      display: "flex",
      alignItems: "center",
    },
    delete: {
      color: "grey",
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    itemName: {
      color: "#18161B",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    price: {
      color: "#F62B2A",
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    card: {
      // width: "90%",
      display: "flex",
      gap: "10px",
      padding: "5px",
    },
    imgConatiner: {
      width: "100px",
      height: "100px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectit: "contain",
    },
    deleteIcon: {
      color: "red",
      fontSize: "30px",
    },
    removeIcon: {
      color: "#FFF",
    },
    addIcon: {
      color: "#FFF",
    },
  };