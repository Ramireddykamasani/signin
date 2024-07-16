import { Box, Divider, Typography } from "@mui/material";
import { Component } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AppDispatch, RootState } from "../../../../../redux/store/Store";
import { addItem } from "../../../../../redux/slices/Slice";
import { connect } from "react-redux";
import { ChickenImage } from "../../../../../utils/data/chicken/ChickenImages";
import { categortItems } from "../../../../ourcategory/OurCategory";
import { Dispatch } from "@reduxjs/toolkit";
import { styles } from "./DecBtnStyles";
interface Iprops {
  quantity: number;
  item: ChickenImage;
  addItem: (item: ChickenImage) => void;
}

class DecCountIncButtons extends Component<{}, {}> {
  handleRemove = () => {
    alert("hai");
  };
 

  render() {

    return (
      <Box sx={styles.buttons}>
        <RemoveIcon sx={styles.removeIcon} onClick={this.handleRemove} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography sx={styles.count}>1</Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <AddIcon sx={styles.addIcon} />
      </Box>
    );
  }
}
// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   addItem : (item:ChickenImage) => dispatch(addItem(item))
// })
// const mapStateToProps = (state: RootState) => ({
//   cartData : state.fipola.cartData,
// });
export default DecCountIncButtons;
