import { Box, Paper, Typography } from "@mui/material";
import { Component } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextFieldComponent from "../../common/textfeild/TextFeild";
import Continue from "../../common/button/continue/Continue";
import withRouter from "../../HOC/Hoc";
import { styles } from "../card/CardPageStyles";
interface Iprops {
  navigate: (path: string) => void;
}

class Upi extends Component<Iprops, {}> {
  handleChange = () => {};
  handleClick = () => {
    this.props.navigate("/congratulations");
  };
  handleCardsPage = () => {
    this.props.navigate("/paymentMethod");
  };
  render() {
    return (
      <Box sx={styles.card}>
        <Box sx={styles.container1}>
          <Typography sx={styles.text}>Card</Typography>
          <ArrowBackIcon sx={styles.navArrow} onClick={this.handleCardsPage} data-testid='arrowicon'/>
        </Box>
        <Paper sx={styles.textFeildContainer1} elevation={7}>
          <TextFieldComponent
            title="Card No"
            name="cardNumber"
            value=""
            handleChange={this.handleChange}
          />
          <TextFieldComponent
            title="Expire"
            name="expire"
            value=""
            handleChange={this.handleChange}
          />
          <TextFieldComponent
            title="CVV"
            name="cvv"
            value=""
            handleChange={this.handleChange}
          />
          <TextFieldComponent
            title="Holder Name"
            name="holderName"
            value=""
            handleChange={this.handleChange}
          />
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
export default withRouter(Upi);
