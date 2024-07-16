import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, Component, createRef, PureComponent } from "react";
import { AppDispatch, RootState } from "../../../redux/store/Store";
import { styles } from "./LoginStyles";
import { loginUser } from "../../../redux/slices/Slice";
import { connect } from "react-redux";
import { error } from "console";

interface ILoginRegister {
  navigate: (path: string) => void;
  loginUser: (phoneNumber: string) => void;
  loginData: {
    data: {
      id: number;
      otp: string;
      status: boolean;
      created_at: string;
      updated_at: string;
      valid_time: string;
      mobile_number: string;
    };
    status: number;
    message: string;
  };
}
interface Istate {
  phoneNumber: string;
  error:string
}
class LoginRegister extends PureComponent<ILoginRegister, Istate> {
  state = {
    phoneNumber: "",
    error:''
  };
  inputref = createRef<HTMLInputElement>()
  handleUser = async () => {
    try {
      const result = await fetch(
        "https://9361-49-205-252-227.ngrok-free.app/login_block/logins/login_with_number",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: this.state.phoneNumber }),
        }
      );
      const data = await result.json();
      if (data.status === 200) {
        this.props.navigate(`/otp/${this.state.phoneNumber}`);
      }
    } catch (error) {}
  };
  handleClick = () => {
    // this.handleUser()
    this.props.loginUser(this.state.phoneNumber);
  
  
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length>10 || event.target.value.length < 10)
    {
  this.setState({error:'inavlaid number'})
    }
    else
    {
      this.setState({error:''})
    }
    this.setState({ phoneNumber: event.target.value });
  };
  handleRegister = () => {
    this.props.navigate("/register");
  };
  componentDidUpdate(prevProps: ILoginRegister, prevState: Istate): void {
    if (this.props.loginData.status === 200) {
      this.props.navigate(`/otp/${this.state.phoneNumber}`);
    }
  }
  componentDidMount(): void {
    if(this.inputref.current)
    {
       this.inputref.current.focus()
    }
    // const localData = localStorage.getItem('newUser')
    // console.log(localData)
  }
  render() {
    return (
      <Box sx={styles.container}>
        <Typography sx={styles.title}>Login & Register</Typography>
        <TextField
        ref={this.inputref}
          placeholder="Mobile No"
          sx={styles.textFeild}
          onChange={this.handleChange}
          value={this.state.phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon sx={styles.icon} />
              </InputAdornment>
            ),
          }}
       ></TextField>
        {
          this.state.error !== '' && <Box sx={styles.error}>{this.state.error}</Box>
        }
        <Button sx={styles.button} onClick={this.handleClick} disabled={this.state.error ? true : false}>
          Continue
        </Button>
        <Typography sx={styles.error} onClick={this.handleRegister}>
          Don't have an account ? Register
        </Typography>
      </Box>
    );
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loginUser: (phoneNumber: string) => dispatch(loginUser(phoneNumber)),
});
const mapStateToProps = (state: RootState) => ({
  loginData: state.fipola.loginData,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
