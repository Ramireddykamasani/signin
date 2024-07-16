import { Box } from "@mui/material";
import { Component } from "react";
import img from "../../assets/images/congratulations/Group5(2).png";
import { styles } from "./CongratulationsStyles";
import withRouter from "../HOC/Hoc";
interface Iprops{
  navigate : (path:string ) => void
}
class Congratulations extends Component<Iprops,{}> {
  handleNavigate = () => {
    this.props.navigate('/orderHistory')
  }
  render() {
    return (
      <Box sx={styles.container}>
        <Box component={"img"} src={img} sx={styles.image} onClick={this.handleNavigate}></Box>
      </Box>
    );
  }
}
export default withRouter(Congratulations) ;
