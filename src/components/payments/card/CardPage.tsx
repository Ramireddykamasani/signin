import { Box, Paper, Typography } from "@mui/material";
import { ChangeEvent, Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import img from "../../../assets/images/upi/Qrcodescanner.png";
import TextFieldComponent from "../../common/textfeild/TextFeild";
import { styles } from "./CardPageStyles";
import Continue from "../../common/button/continue/Continue";
import withRouter from "../../HOC/Hoc";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { connect } from "react-redux";
import { orderDetails } from "../../../redux/slices/Slice";
import { ChickenImage } from "../../../utils/data/chicken/ChickenImages";
interface Iprops {
  navigate: (path: string) => void;
  orderDetails: (value:ChickenImage[]) => void;
  cartData : ChickenImage[]
}

class CardPage extends Component<Iprops, {}> {
  state = {
    upi: "",
    error: "",
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.endsWith("@ybl")) {
      this.setState({
        error: "",
      });
    } else {
      this.setState({
        error: "Invalid UPI ID",
      });
    }
    this.setState({
      upi: event.target.value,
    });
  };
  handleClick = () => {
    this.state.error == "" &&
      this.state.upi !== "" &&
      this.props.orderDetails(this.props.cartData)
      this.props.navigate("/congratulations");
  };
  handleCardsPage = () => {
    this.props.navigate("/paymentMethod");
  };
  render() {
    return (
      <Box sx={styles.card}>
        <Box sx={styles.container}>
          <ArrowBackIcon onClick={this.handleCardsPage} data-testid='backarrow'/>
          <Typography sx={styles.text}>UPI</Typography>
          <Box>
            <Box component={"img"} src={img}></Box>
          </Box>
        </Box>
        <Paper sx={styles.textFeildContainer} elevation={7}>
          <TextFieldComponent
            title="UPI"
            name="upi"
            value={this.state.upi}
            handleChange={this.handleChange}
          />
       {this.state.error &&  <Box sx={styles.error}>{this.state.error}</Box>}

        </Paper>
        <Continue
          title="Pay now"
          data-testid="paynowbutton"
          handleClick={this.handleClick}
        />
      </Box>
    );
  }
}
const mapStateToProps = (state:RootState) => (
  {
    cartData : state.fipola.cartData
  }
)
const mapDispatchToProps = (dispatch:AppDispatch) => (
  {
    orderDetails: (value:ChickenImage[]) => dispatch(orderDetails(value))
  }
)
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CardPage));
