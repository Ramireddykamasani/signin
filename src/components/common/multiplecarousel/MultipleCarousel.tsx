import  { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  ChickenImage,
} from "../../../utils/data/chicken/ChickenImages";
import { Box, Stack, Typography, Divider } from "@mui/material";
import styles from "./MultiCarousel";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";

import { addItem, decreaseItem } from "../../../redux/slices/Slice";
interface Iprops {
  cartData: ChickenImage[];
  addItem: (item: ChickenImage) => void;
  decreaseItem: (item: ChickenImage) => void;
  chickenData: ChickenImage[];
}
interface Istate {
  uniqueId: number;
}
class CarouselComponent extends Component<Iprops, Istate> {
  state: Istate = {
    uniqueId: 0,
  };
  handleIncrease = (item: ChickenImage) => {
    this.props.addItem(item);
    this.setState({
      uniqueId: this.state.uniqueId + 1,
    });
  };
  handleDecrease = (item: ChickenImage) => {
    this.props.decreaseItem(item);
    this.setState({
      uniqueId: this.state.uniqueId + 1,
    });
  };
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    console.log(this.props.chickenData);

    return (
      <Stack gap={"10px"} sx={styles.container1}>
        <Typography sx={styles.sectionTitle}>Best Sellers</Typography>
        <Carousel
          key={this.state.uniqueId}
          centerMode
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {this.props.chickenData.map((item) => (
            <Box sx={styles.container} key={item.id}>
              <Stack sx={styles.mainstack}>
                <Box sx={styles.imgContainer}>
                  <Box component={"img"} sx={styles.img} src={item.image} />
                </Box>
                <Typography sx={styles.itemName} title={item.title}>{item.title}</Typography>
                <Stack direction={"row"} sx={styles.stack}>
                  <Typography sx={styles.price}>
                    ₹{item.offerPrice}.00
                  </Typography>
                  <Box component={"del"} sx={styles.delete}>
                    {item.actualPrice}.00
                  </Box>
                </Stack>
                <Box sx={styles.btnContainer1}>
                  {item.isAdded ? (
                    <Box sx={styles.buttons}>
                      <RemoveIcon
                        sx={styles.removeIcon}
                        onClick={() => this.handleDecrease(item)}
                      />
                      <Divider orientation="vertical" sx={styles.border} />
                      <Typography sx={styles.count}>{item.quantity}</Typography>
                      <Divider orientation="vertical" sx={styles.border} />
                      <AddIcon
                        sx={styles.addIcon}
                        onClick={() => this.handleIncrease(item)}
                      />
                    </Box>
                  ) : (
                    <Typography
                      sx={styles.addToCart}
                      onClick={() => this.handleIncrease(item)}
                    >
                      Add To Cart
                    </Typography>
                  )}
                </Box>
              </Stack>
            </Box>
          ))}
        </Carousel>
      </Stack>
    );
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addItem: (item: ChickenImage) => dispatch(addItem(item)),
  decreaseItem: (item: ChickenImage) => dispatch(decreaseItem(item)),
});
const mapStateToProps = (state: RootState) => ({
  cartData: state.fipola.cartData,
  chickenData: state.fipola.chickenData,
});
export default connect(mapStateToProps, mapDispatchToProps)(CarouselComponent);
