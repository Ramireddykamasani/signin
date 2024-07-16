import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import egg from "../../../assets/images/cart/Rectangle 86.png";
import { styles } from "./ChickenCardStyles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { connect } from "react-redux";
import { ChickenImage } from "../../../utils/data/chicken/ChickenImages";
import { addItem, decreaseItem } from "../../../redux/slices/Slice";

interface ChickenCards {
  id: number;
  title: string;
  img: string;
  quantity: number;
  handleClick: (id: number) => void;
  isAdded:boolean;
  addItem : (value:ChickenImage) => void;
  each : ChickenImage;
  decreaseItem: (value:ChickenImage) => void
}
class Chickencards extends Component<ChickenCards, {}> {
  handleAddItem = (values:ChickenImage) => {
    this.props.addItem(values)
  }
  render() {
    return (
      <Box sx={styles.card} key={this.props.id}>
        <Box
          sx={styles.imgConatiner}
          onClick={() => this.props.handleClick(this.props.id)}
        >
          <Box
            component={"img"}
            src={this.props.img}
            sx={styles.image}
            alt={egg}
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) =>
              ((event.target as HTMLImageElement).src =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_TEWMYc62IveJlw2PzvI3YcyUNzsRQsCGQ&s")
            }
          />
        </Box>
        <Stack justifyContent={"space-between"} gap={"5px"}>
          <Typography sx={styles.itemName}>{this.props.title}</Typography>
          <Stack direction={"row"} gap={"15px"} sx={styles.stack}>
            <Typography sx={styles.price}>₹173.00</Typography>
            <Box component={"del"} sx={styles.delete}>
              200.00
            </Box>
          </Stack>
          <Box sx={styles.btnContainer1}>
            <Stack
              direction={"row"}
              gap={"10px"}
              alignItems={"center"}
              width={"100%"}
            >
              {this.props.isAdded ? (
                <Box sx={styles.buttons1}>
                  <RemoveIcon sx={styles.removeIcon} onClick={() => this.props.decreaseItem(this.props.each)}/>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Typography sx={styles.count}>
                    {this.props.quantity}
                  </Typography>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <AddIcon sx={styles.addIcon} onClick={() => this.handleAddItem(this.props.each)} />
                </Box>
              ) : (
                <Box sx={styles.buttons2} onClick = {() => this.handleAddItem(this.props.each)}>Add to Cart</Box>
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  }
}
const mapDispatchToProps = (dispatch:AppDispatch) => ({
  addItem : (value:ChickenImage) => dispatch(addItem(value)),
  decreaseItem : (value:ChickenImage) => dispatch(decreaseItem(value))
})
const mapStateToProps = (state:RootState) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Chickencards);
