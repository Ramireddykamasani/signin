import { InputAdornment, Stack, TextField } from "@mui/material";
import { ChangeEvent, Component } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styles } from "../ourcategory/OurCategoryStyles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { setIsdeliveryLocation } from "../../redux/slices/Slice";
import { connect } from "react-redux";
interface Istate {
  search: string;
  pinCode: string;
}
interface Iprops {
    isDeliveryLocation: boolean;
    setIsdeliveryLocation: () => void;
    pinCode:number
  }
class Search extends Component<Iprops, Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: "",
      pinCode: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePinCode = this.handlePinCode.bind(this);
  }

  handleSearch(event: ChangeEvent<HTMLInputElement>) {
    this.setState((prev) => ({ ...prev, search: event.target.value }));
  }
  handlePinCode(event: ChangeEvent<HTMLInputElement>) {
    this.setState((prev) => ({ ...prev, pinCode: event.target.value }));
  }
  render() {
    return (
      <Stack direction={"row"} sx={styles.pinContainer}>
        <TextField
          sx={styles.seaerchFeild1}
          inputProps={{
            style: styles.input,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          onChange={this.handleSearch}
          value={this.state.search}
        />
        <TextField
          sx={styles.pincode}
          inputProps={{
            style: styles.input,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
          placeholder="500081"
          onChange={this.handlePinCode}
          value={this.props.pinCode}
          onClick={this.props.setIsdeliveryLocation}
        />
      </Stack>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
    isDeliveryLocation: state.fipola.isDeliveryLocation,
    pinCode: state.fipola.pincode,
  });
  const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setIsdeliveryLocation: () => dispatch(setIsdeliveryLocation()),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Search);
