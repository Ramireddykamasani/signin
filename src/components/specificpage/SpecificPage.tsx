import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import Carousel from "react-material-ui-carousel";
import egg from "../../assets/images/cart/Rectangle95.png";
import DecCountIncButtons from "../common/button/continue/deccountincbuttons/DecCountIncButtons";
import { styles } from "./SpecificStyles";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import chickenImages, {
  ChickenImage,
} from "../../utils/data/chicken/ChickenImages";
import { addItem, decreaseItem } from "../../redux/slices/Slice";
import withRouter from "../HOC/Hoc";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Header from "../common/header/Header";
interface Iprops {
  addItem: (item: ChickenImage) => void;
  decreaseItem: (item: ChickenImage) => void;
  navigate: (path: string) => void;
  params: { id: "" };
  chickenImages:ChickenImage[]
}
interface Istate {
  currentItem: ChickenImage;
  id:number
}
class SpecificPage extends Component<Iprops, Istate> {
  state = {
    currentItem: {id: 0,
      image: '',
      title: '',
      description: '',
      actualPrice: 0,
      offerPrice: 0,
      isFavourate: false,
      quantity: 0,
      isAdded:false},
      id:0
  };

  handleClick = (item:ChickenImage) => {
    this.props.addItem(item);

  }
 
  handleNavigate = () => {
    this.props.navigate("/chicken");
  };
 
  render() {
    console.log(this.props.chickenImages);
    return (
      <Stack>
        <Header handleNaviagte={this.handleNavigate} title="Details" />
        <Stack sx={styles.container}>
       
          {
            
              this.props.chickenImages.filter((item) => item.id === parseInt(this.props.params.id)).map((item) => ( 
              <>   <Carousel
              sx={styles.carousel}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#F5BF45",
                },
              }}
            >
            
              <Box sx={styles.imageContainer}>
                <Box
                  component={"img"}
                  src={item.image}
                  sx={styles.image}
                  alt="no images..."
                />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box
                  component={"img"}
                  src={item.image}
                  sx={styles.image}
                  alt="no images..."
                />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box
                  component={"img"}
                  src={item.image}
                  sx={styles.image}
                  alt="no images..."
                />
              </Box>
            </Carousel>
            <Paper elevation={3} sx={styles.card}>
                <Typography sx={styles.title}>
                  {item.title}
                </Typography>
                <Box sx={styles.priceContainer}>
                  <Box sx={styles.price}>₹173.00 </Box>
                  <Box component={"del"} sx={styles.actualPrice}>
                    200.00{" "}
                  </Box>
                </Box>
                <Typography sx={styles.description}>
                  High in quality protein and Vitamins nutritious pack to improve
                  your health
                </Typography>
                <Stack sx={styles.stack}>
                  <Box sx={styles.QuantityConatiner}>
                    <Typography sx={styles.pack}>Pieces</Typography>
                    <Typography sx={styles.pack}>12</Typography>
                  </Box>
                  <Box sx={styles.QuantityConatiner}>
                    <Typography sx={styles.pack}>Packs</Typography>
                    <Typography sx={styles.pack}>2 Pack</Typography>
                  </Box>
                </Stack>
                {item.isAdded ? (
                  <Box sx={styles.buttons}>
                    <RemoveIcon
                      sx={styles.removeIcon}
                      onClick={() =>
                        this.props.decreaseItem(item)
                      }
                    />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Typography sx={styles.count}>
                      {item.quantity}
                    </Typography>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <AddIcon
                      sx={styles.addIcon}
                      onClick={() => this.props.addItem(item)}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={styles.buttonsText}
                    onClick={() => this.handleClick(item)}
                  >
                    Add To Cart
                  </Box>
                )}
              </Paper></>
             ))
            }
         
        </Stack>
      </Stack>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  chickenImages: state.fipola.chickenData,

});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addItem: (item: ChickenImage) => dispatch(addItem(item)),
  decreaseItem: (item: ChickenImage) => dispatch(decreaseItem(item)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SpecificPage)
);
