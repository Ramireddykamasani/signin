import { Box, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import * as React from "react";
import { yellow } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Header from "../common/header/Header";
import AddIcon from "@mui/icons-material/Add";
import Continue from "../common/button/continue/Continue";
import { IDeliveryAddress } from "../../utils/data/deliveryaddress/DeliveryAddress";
import { styles } from "./DeliveryStyles";
import withRouter from "../HOC/Hoc";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { connect } from "react-redux";
import {  isSelected } from "../../redux/slices/Slice";
interface Iprops {
  navigate: (path: string) => {};
  allAddresses: IDeliveryAddress[];
  slectedAddress: IDeliveryAddress;
  isSelected: (values: string) => void;
}
interface Istate {
  selectedValue: string;
  isAddAddress: boolean;
}
class DeliveryAddress extends Component<Iprops, Istate> {
  state: Istate = {
    selectedValue: "a",
    isAddAddress: false,
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedValue: event.target.value });
    this.props.isSelected(event.target.value);
  };
  handleMenu = () => {};
  controlProps = (item: string) => ({
    checked: this.state.selectedValue === item,
    onChange: this.handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  handleClick = () => {
    this.props.navigate("/paymentMethod");
  };
  handleNewAddress = () => {
    this.props.navigate("/newAddress");
  };
  componentDidMount(): void {
    if (window.location.pathname == "/deliveryAddress") {
      this.setState({ isAddAddress: true });
    }
  }
  handleNaviagte = () => {
    this.props.navigate("/cart");
  };

  render() {
    return (
      <Stack justifyContent={"center"} alignItems={"center"}>
        {this.state.isAddAddress && (
          <AddIcon sx={styles.addIcon} onClick={this.handleNewAddress} />
        )}
        <Header title="Delivery Address" handleNaviagte={this.handleNaviagte} />
        <Box sx={styles.container}>
          {this.props.allAddresses.map((each) => (
            <Paper elevation={3} sx={styles.deliveryaddressCard} key={each.id}>
              <Box>
                <Radio
                  {...this.controlProps(`${each.username}`)}
                  sx={{
                    color: "#BAB9BB",
                    "&.Mui-checked": {
                      color: yellow[600],
                    },
                    padding: "0px 10px",
                    ...styles.radio,
                  }}
                />
              </Box>

              <Stack>
                <Typography sx={styles.name}>{each.username}</Typography>
                <Typography sx={styles.address}>
                  {each.buildingName},{each.city}-{each.pincode}
                </Typography>
              </Stack>
              <MoreVertIcon onClick={this.handleMenu} />
            </Paper>
          ))}
        </Box>
        <Continue title="Continue" handleClick={this.handleClick} />
      </Stack>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  allAddresses: state.fipola.allAddresses,
  slectedAddress: state.fipola.slectedAddress,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  isSelected: (values: string) => dispatch(isSelected(values)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress)
);
