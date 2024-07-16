import bgimg from "../../assets/images/landingapage/bgtexure.png";

export const styles = {
    landingpageContainer: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundImage: `url(${bgimg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#F5BF45",
      backgroundAttachment: "fixed",
    },
    topImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    bottomImage: {
      width: { xs: "100%" },
      height: "100%",
      objectFit: "contain",
    },
    bottomConatiner: {
      display: "flex",
      alignItems: "center",
      justifyConet: "center",
      width: "100%",
      height: "200px",
      position: "absolute",
      bottom: -10,
      left: 0,
    },
    imgContainer: {
      display: "flex",
      alignItems: "center",
      justifyConet: "center",
      width: "100%",
      height: "200px",
      position: "absolute",
      top: -30,
      left: 0,
    },
  };