export const styles = {
    container:{
padding:'10px',
display: "flex",
alignItems: "center",
flexDirection:'column',
justifyContent:'center',
background:"white",marginTop:'25px'
    },
    pressText:{
       width: "100%" ,
alignItems: "center",
    },
  imageContainer: {
    width: {xs:'100%',sm:'94%',lg:'50%',xl:'50%'},
    height: "100%",
  },
  image: {
    width: {xs:'100%'},
    height: "100%",
    objecFit: "cover",
  },
  title: {
    color: "#18161B",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontSize: {xs:'20px',sm:'23px'},
    fontWeight: "600",
    boxSizing: "border-box",
    width:'100%',
    paddingLeft:{xs:'8px',sm:'20px',lg:"40px"},
    marginBottom:'10px',
  },
  paper: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    flexDirection:{xs:'column',sm:'row'},
    justifyContent:'center',
    gap:'20px',
    padding:{xs:'0px',sm:'20px'},
    paddingBottom:{xs:'20px',sm:'20px'},
    boxSizing: "border-box",

  },
  text:{
    color: "#18161B",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontSize: {xs:'14px',sm:"20px",lg:'30px'},
    fontWeight: "600",
    boxSizing: "border-box",
    width:"90%",
    textAlign:'center'
  },
  date:{
    color: "#F62B2A",
    fontFamily: '"Montserrat Alternates", sans-serif',
    fontSize: {xs:'14px',sm:'20px',lg:'30px'},
    fontWeight: "600",
    boxSizing: "border-box",
    width:'90%',
    textAlign:'center'

  }
};