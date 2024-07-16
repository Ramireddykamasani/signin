import zIndex from "@mui/material/styles/zIndex";

export const styles = {
    radio: {
      "& css-8qybr0-MuiButtonBase-root-MuiRadio-root": {
        padding: "0px",
      },
    },
  
    deliveryaddressCard: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 10px",
      width:{xs:'85%',sm:'60%',md:'40%',lg:'30%'},
      margin: "10px 0px",
      borderRadius: "10px",
    },
    name: {
      color: "#18161B",
      fontSize: "15px",
      fontWeight: "600",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    address: {
      color: "#BAB9BB",
      fontSize: "13px",
      fontWeight: "600",
      fontFamily: '"Montserrat Alternates", sans-serif',
      lineHeight: "25px",
    },
    container: {
      width:'100%',
      display: "flex",
      justifyContent: {xs:'center',md:'start'},
      alignItems: "center",
      gap: {xs:'10px',md:'50px',lg:'20px'},
      flexDirection: {xs:'column',md:'row'},
      flexWrap:'wrap',
      boxSizing:'border-box',
      padding:'0px 10px'

    },
    addIcon: {
      position: "absolute",
      right: "10px",
      top: "18px",
      color: "#FFF",
      background: "#E7AC27",
      padding: "5px",
      borderRadius: "100%",
      zIndex:9999
    },
  };