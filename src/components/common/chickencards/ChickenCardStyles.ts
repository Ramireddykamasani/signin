export const styles = {
    Conatiner: {
      width: "100%",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      overflow: "scroll",
      "::-webkit-scrollbar": {
        display: "none",
      },
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
      
    buttons1: {
      width:'100%',
      display: "flex",
      gap: "10px",
      alignItems: "center",
      background: "#F5BF45",
      padding: "10px 5px",
      borderRadius: "25px",
      justifyContent:'space-evenly'

    },
    buttons2: {
      width:'100%',
      gap: "10px",
      textAlign:'center',
      background: "#F5BF45",
      padding: "10px 5px",
      borderRadius: "25px",
      color: "#18161B",
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',

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
    btnContainer1: {
      display: "flex",
      gap: "20px",
      width:'100%'
    },
    stack: {
      display: "flex",
      alignItems: "center",
    },
    delete: {
      color: "grey",
      fontSize: "13px",
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    itemName: {
      color: "#18161B",
      fontSize: "13px",
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    price: {
      color: "#F62B2A",
      fontSize: "13px",
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
      width: {xs:'45%',sm:'22%',lg:'15%'},
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "5px",
    },
    imgConatiner: {
      width: "100%",
      height: {xs:'100px',sm:'125px',md:'135px',lg:'150px'},
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