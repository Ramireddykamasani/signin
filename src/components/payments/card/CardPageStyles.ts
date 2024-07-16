export const styles = {
    container: {
      width: "100%",
      height: "15vh",
      display: "flex",
      justifyContent: "space-between",
      background: "#F5BF45",
      padding: "20px 20px",
      boxSizing: "border-box",
    },
    container1: {
        width: "100%",
        height: "15vh",
        display: "flex",
        justifyContent: "center",
        background: "#F5BF45",
        padding: "20px 20px",
        boxSizing: "border-box",
        position:'relative'
      },
      navArrow:{
        position:'absolute',
        left:'20px',
        top:{xs:'24px',sm:"21px"},
       fontSize:'26px'
        
      },

    card:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
      color: "#18161B",
      fontSize: { xs: "20px", sm: "19px" },
      fontWeight: "600",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    error:{
      color: "#F62B2A",
      fontSize: { xs: "13px" },
      fontWeight: "500",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    textFeildContainer:{
      position:'absolute',
      height:'10vh',
      top:'80px',
      display: "flex",
      justifyContent: "center",
      alignItems:'center',
      padding:'20px 20px',
      flexDirection:'column'
    },
    textFeildContainer1:{
        position:'absolute',
        top:'80px',
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems:'center',
        padding:'20px 20px',
        borderRadius:'15px'
      },
  };