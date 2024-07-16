import { Box, Stack } from "@mui/material";
import { ChangeEvent, Component, ReactNode } from "react";
import Continue from "../common/button/continue/Continue";
import Header from "../common/header/Header";
import Maps from "../common/maps/Maps";
import TextFieldComponent from "../common/textfeild/TextFeild";
import { IDeliveryAddress } from "../../utils/data/deliveryaddress/DeliveryAddress";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { addNewAddress } from "../../redux/slices/Slice";
import withRouter from "../HOC/Hoc";
import { styles } from "../carouselandlogin/CarouselAndLoginStyles";
interface Iprops {
  navigate: (path: string) => void;
  addNewAddress: (value: IDeliveryAddress) => void;
}

class AddNewAddress extends Component<Iprops, {}> {
  state: IDeliveryAddress = {
    id: 0,
    username: "",
    buildingName: "",
    flatNumber: "",
    pincode: "",
    city: "",
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prev) => ({ ...prev, [name]: value }));
  };
  handleClick = () => {
    this.props.addNewAddress(this.state);
    this.props.navigate("/deliveryAddress");
  };
  render(): ReactNode {
    return (
      <Stack>
        <Header title="Add New Address" handleNaviagte={this.handleClick} />
        <Stack sx={styles.stack}>
          <Box sx={styles.container}>
            <Maps />
          </Box>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <TextFieldComponent
              title="User Name"
              name="username"
              value={this.state.username}
              handleChange={this.handleChange}
              data-testid= 'username'
            />
            <TextFieldComponent
              title="flatNumber"
              name="flatNumber"
              value={this.state.flatNumber}
              handleChange={this.handleChange}
            />
            <TextFieldComponent
              title="Building Name"
              name="buildingName"
              value={this.state.buildingName}
              handleChange={this.handleChange}
            />

            <TextFieldComponent
              title="City"
              name="city"
              value={this.state.city}
              handleChange={this.handleChange}
            />

            <TextFieldComponent
              title="Pin Code"
              name="pincode"
              value={this.state.pincode}
              handleChange={this.handleChange}
            />
            <Continue title="Add New" handleClick={this.handleClick} data-testid='continue'/>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addNewAddress: (values: IDeliveryAddress) => dispatch(addNewAddress(values)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddNewAddress)
);
