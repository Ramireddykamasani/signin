import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEvent, Component } from "react";
import styled from "styled-components";
import TextFieldComponent from "../common/textfeild/TextFeild";
import Continue from "../common/button/continue/Continue";
import Header from "../common/header/Header";
import styles from "./RegisterStyles";
import withRouter from "../HOC/Hoc";
import { registerUrl } from "../../urls/Urls";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { Idata, registerUser } from "../../redux/slices/Slice";
import { connect } from "react-redux";
import register from "../../assets/images/landingapage/register.gif";

const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
interface Iprops {
  navigate: (path: string) => void;
  registerUser: (value: any) => void;
  registerError: string | undefined;
  registeredData: {
    data: {
      id: string;
      type: string;
      attributes: {
        created_at: string;
        first_name: string;
        last_name: string;
        email: string;
        mobile_number: string;
        updated_at: string;
      };
    };
  };
}
interface Istate {
  payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobileNumber: string;
  };
  error: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobileNumber: string;
  };
  isError: boolean;
}
class Register extends Component<Iprops, Istate> {
  state: Istate = {
    payload: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    error: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    isError: false,
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        this.state.error.firstName =
          value.length > 2
            ? ""
            : "*first name should be greater than 2 characters";
        break;
      case "lastName":
        this.state.error.lastName =
          value.length > 2
            ? ""
            : "*last name should be greater than 2 characters";
        break;
      case "email":
        this.state.error.email = emailregex.test(value) ? "" : "*invalid email";
        break;
      case "password":
        this.state.error.password = passwordRegex.test(value)
          ? ""
          : "*password must be grater than 8 characters and should contain at least one uppercase letter, one lowercase letter, one number and one special character";

        break;
      case "mobileNumber":
        this.state.error.mobileNumber =
          value.length === 10 ? "" : "*mobile number should be 10 digits only";
        break;
    }
    this.setState({
      payload: {
        ...this.state.payload,
        [name]: value,
      },
    });
  };
  handleClick = () => {
    if (
      this.state.payload.firstName === "" ||
      this.state.payload.lastName === "" ||
      this.state.payload.email === "" ||
      this.state.payload.password === "" ||
      this.state.payload.mobileNumber === ""
    ) {
      // this.setState((prev) => ({
      //   ...prev,
      //   errors: {
      //     ...prev,
      //     firstName:
      //       this.state.payload.firstName.length !> 0
      //         ? "*first name is required"
      //         : "",
      //     lastName:
      //       this.state.payload.lastName === "" ? "*last name is required" : "",
      //     email: this.state.payload.email === "" ? "*email is required" : "",

      //     password:
      //       this.state.payload.password === "" ? "*password is required" : "",
      //     mobileNumber:
      //       this.state.payload.mobileNumber === ""
      //         ? "*mobile number is required"
      //         : "",
      //   },
      // }));

      this.setState({
        error: {
          firstName:
            this.state.payload.firstName.length > 0
              ? ""
              : "*first name is required",
          lastName:
            this.state.payload.lastName === "" ? "*last name is required" : "",
          email: this.state.payload.email === "" ? "*email is required" : "",

          password:
            this.state.payload.password === "" ? "*password is required" : "",
          mobileNumber:
            this.state.payload.mobileNumber === ""
              ? "*mobile number is required"
              : "",
        },
      });
    } else if (
      this.state.error.firstName === "" &&
      this.state.error.lastName === "" &&
      this.state.error.email === "" &&
      this.state.error.password === "" &&
      this.state.error.mobileNumber === "" &&
      this.state.payload.firstName !== "" &&
      this.state.payload.lastName !== "" &&
      this.state.payload.email !== "" &&
      this.state.payload.password !== "" &&
      this.state.payload.mobileNumber !== ""
    ) {
      // this.createUser();
      const { payload } = this.state;
      const data = {
        user: {
          first_name: payload.firstName,
          last_name: payload.lastName,
          email: payload.email,
          password: payload.password,
          mobile_number: payload.mobileNumber,
        },
      };
      this.props.registerUser(data);
      // localStorage.setItem('newUser', JSON.stringify(data))
      this.setState({
        payload: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          mobileNumber: "",
        },
        isError:
          this.props.registeredData.data.attributes.first_name === ""
            ? true
            : false,
      });

      this.props.navigate("/login");
    }
  };

  createUser = async () => {
    const { payload } = this.state;
    const data = {
      user: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        password: payload.password,
        mobile_number: payload.mobileNumber,
      },
    };

    try {
      const response = await fetch(registerUrl, {
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNzE3ODMxMzM3fQ.kWPFEDBzJ1ftgE27o_I4aPHZ9dV-q9JDV7iYmKJd4j4",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const result = await response.json();
      if (result.errors[0] === "Mobile number has already been taken") {
        this.setState({
          isError: true,
        });
      } else {
        this.setState({
          isError: false,
        });
        this.props.navigate("/login");
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
    }
  };
  handleNaviagte = () => {
    this.props.navigate("/login");
  };
  render() {
    const { error } = this.state;
    console.log(this.props.registeredData);
    return (
      <Box sx={styles.textFeild}>
        <Header title={"Register"} handleNaviagte={this.handleNaviagte} />
        <Box sx={styles.registerContainer}>
          <Box sx={styles.reigstergif}>
            <Box component={"img"} src={register} sx={styles.image} />
          </Box>
          <Box sx={styles.textFeildContainer}>
            <TextFieldComponent
              title={"First Name"}
              name="firstName"
              value={this.state.payload.firstName}
              handleChange={this.handleChange}
            />
            {error.firstName && (
              <Typography sx={styles.error}>{error.firstName}</Typography>
            )}
            <TextFieldComponent
              title={"Last Name"}
              name="lastName"
              value={this.state.payload.lastName}
              handleChange={this.handleChange}
            />
            {error.lastName && (
              <Typography sx={styles.error}>{error.lastName}</Typography>
            )}
            <TextFieldComponent
              title={"Email"}
              name="email"
              value={this.state.payload.email}
              handleChange={this.handleChange}
            />
            {error.email && (
              <Typography sx={styles.error}>{error.email}</Typography>
            )}
            <TextFieldComponent
              title={"Password"}
              name="password"
              value={this.state.payload.password}
              handleChange={this.handleChange}
            />
            {error.password && (
              <Typography sx={styles.error}>{error.password}</Typography>
            )}
            <TextFieldComponent
              title={"Mobile Number"}
              name="mobileNumber"
              value={this.state.payload.mobileNumber}
              handleChange={this.handleChange}
            />
            {error.mobileNumber && (
              <Typography sx={styles.error}>{error.mobileNumber}</Typography>
            )}
            {this.state.isError && (
              <Typography sx={styles.error}>
                Mobile number has already been taken
              </Typography>
            )}
            <Continue title={"Continue"} handleClick={this.handleClick} />
          </Box>
        </Box>
      </Box>
    );
  }
}
const mapDisPatchToProps = (dispatch: AppDispatch) => ({
  registerUser: (userDetails: Idata["data"]) =>
    dispatch(registerUser(userDetails)),
});
const mapStateToProps = (state: RootState) => ({
  registerError: state.fipola.registerError,
  registeredData: state.fipola.registeredData,
});
export default withRouter(
  connect(mapStateToProps, mapDisPatchToProps)(Register)
);
