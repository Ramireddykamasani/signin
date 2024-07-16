import { BorderColor } from "@mui/icons-material";

const styles = {
  sectionTitle: {
    padding: "5px 20px",
    color: "#18161B",
    fontSize: { xs: "20px", sm: "23px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    marginTop:'10px'
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  addToCart:{
    width: "100%",
    textAlign: "center",
    background: "#F5BF45",
    color: "white",
    padding: "10px 0px",
    borderRadius:'20px',
    cursor:'pointer'
  },
  container1: {
    background: "#FFFFFF",
    boxShadow: "4px 4px 10px silver",
    width: "100%",
    "& .react-multi-carousel-item": {
      width: { xs: "250px!important", lg: "350px!important" },
    },
  },
  price: {
    color: "#F62B2A",
    fontSize: { xs: "13px", sm: "15px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
  },
  border:{
  borderColor:'#FFFFFF',
  height:'160%'
  },
  delete: {
    color: "grey",
    fontSize: { xs: "13px", sm: "15px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
  },
  container: {
    width: { xs: "200px!important", lg: "300px!important" },
    height: { xs: "250px", sm: "300px", md: "350px" },
    borderRadius: "15px",
    overflow: "none",
    boxSizing: "border-box",
  },
  container2: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 20px!important",
  },
  stack: {
    width: "90%",
    gap: "15px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#F5BF45",
    borderRadius: "20px",
    width: { xs: "100%", sm: "90%" },
    padding: "10px",
  },
  count: {
    padding: "0px 10px",
    color: "#000000",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontWeight: "600",
  },
  btnContainer1: {
    display: "flex",
    gap: "20px",
    padding: "10px 0px",
  },
  removeIcon: {
    color: "#FFF",
    cursor:'pointer'

  },
  addIcon: {
    color: "#FFF",
    cursor:'pointer'

  },

  mainstack: {
    width: "100%",
    gap: "12px",
    padding: "10px",
    boxSizing: "border-box",
  },
  imgContainer: {
    width: "100%",
    height: { xs: "100px", sm: "150px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    overflow: "none",
    boxSizing: "border-box",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    overflow: "none",
  },
  itemName: {
    color: "#18161B",
    fontSize: { xs: "13px", sm: "15px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    height: { xs: "15px", sm: "20px" },
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
  },
};
export default styles;
