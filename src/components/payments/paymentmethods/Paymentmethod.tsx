import { Box, Paper, Radio, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import * as React from "react";
import { yellow } from "@mui/material/colors";
import visa from "../../../assets/images/paymentmethod/sprite-map 1.png";
import Header from "../../common/header/Header";
import Continue from "../../common/button/continue/Continue";
import withRouter from "../../HOC/Hoc";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { connect } from "react-redux";
import { styles } from "./PaymentStyles";

interface Iprops {
  navigate: (path: string) => void;
}
class PaymentMethod extends Component<Iprops, {}> {
  state = {
    selectedValue: "a",
    isAddAddress: false,
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedValue: event.target.value });
  };
  handleClick = () => {
    if (this.state.selectedValue === "atm") this.props.navigate("/card");
    else this.props.navigate("/upi");
  };

  controlProps = (item: string) => ({
    checked: this.state.selectedValue === item,
    onChange: this.handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  handleNaviagte = () => {
    this.props.navigate("/deliveryAddress");
  };
  render(): ReactNode {
    return (
      <Box sx={styles.container}>
        <Header title="Payment Method" handleNaviagte={this.handleNaviagte} />
        <Paper sx={styles.paper1} elevation={3}>
          <Box sx={styles.paper2}>
            <Box>
              <Radio
                {...this.controlProps(`atm`)}
                sx={{
                  color: "#BAB9BB",
                  "&.Mui-checked": {
                    color: yellow[600],
                  },
                  padding: "0px 10px",
                }}
              />
            </Box>
            <Typography sx={styles.text}>Debit / Credit / ATM</Typography>
          </Box>
          <Box component={"img"} src={visa} sx={styles.image}></Box>
        </Paper>
        <Paper sx={styles.paper} elevation={3}>
          <Box>
            <Radio
              {...this.controlProps(`a`)}
              sx={{
                color: "#BAB9BB",
                "&.Mui-checked": {
                  color: yellow[600],
                },
                padding: "0px 10px",
              }}
            />
          </Box>
          <Typography sx={styles.text}>Net Banking</Typography>
        </Paper>
        <Paper sx={styles.paper} elevation={3}>
          <Box>
            <Radio
              {...this.controlProps(`b`)}
              sx={{
                color: "#BAB9BB",
                "&.Mui-checked": {
                  color: yellow[600],
                },
                padding: "0px 10px",
              }}
            />
          </Box>
          <Typography sx={styles.text}>Upi</Typography>
        </Paper>
        <Box
          component={"img"}
          src="https://cdn.dribbble.com/users/1280935/screenshots/6974685/media/ec4c386222b837da0ff6eabec3f59ba3.gif"
          sx={styles.payment}
        ></Box>
        <Continue title="Continue" handleClick={this.handleClick} />
      </Box>
    );
  }
}
const mapStateToProps = (state: RootState) => ({});
const mapDispatchToProps = (dispatch: AppDispatch) => {};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaymentMethod)
);
