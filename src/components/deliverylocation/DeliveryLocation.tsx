import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, Component } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./DeliveryStyles";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { connect } from "react-redux";
import { handlePinCode, setIsdeliveryLocation } from "../../redux/slices/Slice";
interface Iprops {
  isDeliveryLocation: boolean;
  setIsdeliveryLocation: () => void;
  handlePinCode: (value: number) => void;
  pinCode: number;
}
interface Istate {
  pincodeError: boolean;
  pincode:number
}
class DeliveryLocation extends Component<Iprops, Istate> {
  state = {
    pincodeError: false,
    pincode:this.props.pinCode
  };
  handleClose = () => {
    // this.setState({ open: false });
    this.props.setIsdeliveryLocation();
    this.setState({ pincodeError: false });
  };
  handleSend = () => {
    // this.setState({ open: false });
    !this.state.pincodeError && this.props.setIsdeliveryLocation();
    this.props.handlePinCode(this.state.pincode);

  };
  handlePinCode = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length == 6) {
      this.setState({ pincodeError: false });
    } else {
      this.setState({ pincodeError: true });
    }
    this.setState({ pincode: parseInt(event.target.value) });
    // this.props.handlePinCode(parseInt(event.target.value));
  };

  render() {
    console.log(this.props.pinCode);
    return (
      <React.Fragment data-testid="drawer">
        <Drawer
          anchor={"bottom"}
          open={this.props.isDeliveryLocation}
          onClose={this.handleClose}
        >
          <Box
            onClick={this.handleClose}
            sx={styles.close}
            data-testid="closeBtn"
          >
            <CloseIcon />
          </Box>
          <Stack sx={styles.container}>
            <Typography sx={styles.title}>Delivery Location</Typography>
            <Typography sx={styles.text}>
              serviceable locations : Bengaluru | Chennai | Coimbatore |
              Hysrabad Puducherry | Turpur | vellore
            </Typography>
            <TextField
              inputProps={{ "data-testid": "pincodeText" }}
              InputProps={{
                startAdornment: <PlaceIcon sx={styles.map} />,
                endAdornment: (
                  <ArrowCircleRightIcon
                    sx={styles.arrow}
                    onClick={this.handleSend}
                  />
                ),
              }}
              sx={styles.input}
              placeholder="Enter Pin Code"
              onChange={this.handlePinCode}
              type="number"
              value={this.state.pincode}
            />
            {this.state.pincodeError && (
              <Typography sx={styles.error}>Invalid Pincode</Typography>
            )}
          </Stack>
        </Drawer>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  isDeliveryLocation: state.fipola.isDeliveryLocation,
  pinCode: state.fipola.pincode,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setIsdeliveryLocation: () => dispatch(setIsdeliveryLocation()),
  handlePinCode: (value: number) => dispatch(handlePinCode(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DeliveryLocation);
