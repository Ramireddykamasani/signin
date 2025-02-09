export const styles = {
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#F5BF45",
    borderRadius: "20px",
    width: { xs: "100%", sm: "40%" },
    padding:'10px'
  },
  buttonsText: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#F5BF45",
    borderRadius: "20px",
    width: { xs: "100%", sm: "40%" },
    padding:'10px',
    color: "#000000",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontWeight: "600",
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
  removeIcon: {
    color: "#FFF",
  },
  addIcon: {
    color: "#FFF",
  },
  stack: {
    width: "100%",
  },
  container: {
    justifyContent: { xs: "center", sm: "space-evenly" },
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
    height: { sm: "100vh" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 20px",
    jusifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: { xs: "80%", sm: "30%" },
    position: "relative",
    zIndex: "99999",
    top: { xs: "-30px", sm: "0px" },
    borderRadius: "15px",
  },
  QuantityConatiner: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pack: {
    color: "#18161B",
    fontSize: { xs: "13px", sm: "17px" },
    fontWeight: "500",
    textTransform: "none",
    fontFamily: "Poppins",
  },
  description: {
    marginTop: "20px",
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: { xs: "14px", sm: "15px" },
    fontWeight: "500",
    textTransform: "none",
    fontFamily: "Poppins",
  },
  title: {
    color: "#18161B",
    fontSize: { xs: "17px", sm: "20px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    textAlign: "center",
  },
  carousel: {
    width: { xs: "100%", sm: "40%", lg:'30%' },
    ".css-1m9128y": {
      position: "absolute",
      zIndex: "9999",
      top: { xs: "250px", sm: "330px" },
    },
  },
  imageContainer: {
    width: "100%",
    height: "50vh",
  },
  image: { width: "100%", height: "100%", objectFit: "contain" },
  price: {
    color: "#F62B2A",
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
  },
  actualPrice: {
    color: "grey",
    fontSize: { xs: "14px", sm: "20px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    marginLeft: "10px",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
