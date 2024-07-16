import { Box } from "@mui/material";
import { Component } from "react";
import Chickencards from "../common/chickencards/ChickenCards";
import chickenImages, { ChickenImage } from "../../utils/data/chicken/ChickenImages";
import Header from "../common/header/Header";
import withRouter from "../HOC/Hoc";
import { styles } from "./ChickenStyles";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { connect } from "react-redux";
import { addItem } from "../../redux/slices/Slice";

interface Iprops{
  navigate : (path:string) => void
  chickenData: ChickenImage[],
   addItem : (item:ChickenImage) => void
}
class Chicken extends Component<Iprops,{}> {
  handleNaviagte = () => {
    this.props.navigate("/ourCategory");
  }
  handleClick = (id:number) => {
    this.props.navigate(`/specificPage/${id}`);
  }
  render() {
    return (
      <Box>
        <Header title={"Chicken"} handleNaviagte={this.handleNaviagte}/>
        <Box sx={styles.container}>
          {this.props.chickenData.map((each) => (
            <Chickencards id={each.id} img={each.image} title={each.title} handleClick={this.handleClick} quantity={each.quantity} isAdded={each.isAdded} each={each}/>
          ))}
        </Box>
      </Box>
    );
  }
}
const mapStateToProps = (state:RootState) => ({
  chickenData: state.fipola.chickenData,
})
const mapDispatchToProps = (dispatch:AppDispatch) => ({
  addItem : (item:ChickenImage) => dispatch(addItem(item))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Chicken));
