import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Header from "../common/header/Header";
import Continue from "../common/button/continue/Continue";
import { ChickenImage } from "../../utils/data/chicken/ChickenImages";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { addItem, decreaseItem, deleteItem } from "../../redux/slices/Slice";
import { connect } from "react-redux";
import withRouter from "../HOC/Hoc";
import { styles } from "./CartStyles";

interface Iprops {
  navigate: (url: string) => void;
  cartData: ChickenImage[];
  total: number;
  addItem: (data: ChickenImage) => void;
  deleteItem: (data: ChickenImage) => void;
  decreaseItem: (data: ChickenImage) => void;
}

class Cart extends Component<Iprops, {}> {
  handleIncrease = (item: ChickenImage) => {
    this.props.addItem(item);
  };
  handleDelete = (item: ChickenImage) => {
    this.props.deleteItem(item);
  };
  handleDecrease = (item: ChickenImage) => {
    this.props.decreaseItem(item);
  };
  handleClick = () => {
    this.props.navigate("/deliveryAddress");
  };
  handleNavigate = () => {
    this.props.navigate("/homepage");
  };
  render() {
    return (
      <Box sx={styles.cardsContainer}>
        <Header title={"Cart"} handleNaviagte={this.handleNavigate} />
        {this.props.cartData.length > 0 ? (
          <>
            <Stack sx={styles.cardsStack}>
              <Box sx={styles.Conatiner}>
                {this.props.cartData.length > 0 &&
                  this.props.cartData.map((each) => (
                    <Paper elevation={3} sx={styles.card} key={each.id}>
                      <Box sx={styles.imgConatiner}>
                        <Box
                          component={"img"}
                          src={each.image}
                          sx={styles.image}
                        />
                      </Box>
                      <Stack
                        justifyContent={"space-between"}
                        flexDirection={"column"}
                      >
                        <Typography sx={styles.itemName}>
                          {each.title}
                        </Typography>
                        <Stack direction={"row"} gap={"15px"} sx={styles.stack}>
                          <Typography sx={styles.price}>
                            ₹{each.offerPrice}.00
                          </Typography>
                          <Box component={"del"} sx={styles.delete}>
                            {each.actualPrice}.00
                          </Box>
                        </Stack>
                        <Box sx={styles.btnContainer}>
                          <Stack
                            direction={"row"}
                            gap={"10px"}
                            alignItems={"center"}
                          >
                            <Box sx={styles.buttons}>
                              <RemoveIcon
                                sx={styles.removeIcon}
                                onClick={() => this.handleDecrease(each)}
                              />
                              <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                              />
                              <Typography sx={styles.count}>
                                {each.quantity}
                              </Typography>
                              <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                              />
                              <AddIcon
                                sx={styles.addIcon}
                                onClick={() => this.handleIncrease(each)}
                              />
                            </Box>
                            <DeleteIcon
                              sx={styles.deleteIcon}
                              onClick={() => this.handleDelete(each)}
                            />
                          </Stack>
                        </Box>
                      </Stack>
                    </Paper>
                  ))}
              </Box>

              <Stack sx={styles.amountContainer}>
                <Box sx={styles.subtotalConatiner}>
                  <Typography sx={styles.text}>Subtotal </Typography>
                  <Typography sx={styles.cost}>
                    {" "}
                    ₹{this.props.total}.00{" "}
                  </Typography>
                </Box>
                <Box sx={styles.subtotalConatiner}>
                  <Typography sx={styles.text}>Delivery Charge</Typography>
                  <Typography sx={styles.cost}>₹0</Typography>
                </Box>
                <Box sx={styles.subtotalConatiner}>
                  <Typography sx={styles.text}>Subtotal</Typography>
                  <Typography sx={styles.subtotalPrice}>
                    ₹{this.props.total}.00
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Continue title={"Check Out"} handleClick={this.handleClick} />
          </>
        ) : (
          <Box
            component={"img"}
            src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
          />
        )}
      </Box>
    );
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addItem: (item: ChickenImage) => dispatch(addItem(item)),
  deleteItem: (item: ChickenImage) => dispatch(deleteItem(item)),
  decreaseItem: (item: ChickenImage) => dispatch(decreaseItem(item)),
});
const mapStateToProps = (state: RootState) => ({
  cartData: state.fipola.cartData,
  total: state.fipola.total,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
