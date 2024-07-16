import { Box, Stack, Typography } from "@mui/material";
import React, { ChangeEvent, Component, ReactNode, RefObject } from "react";
import msgImage from "../../assets/images/otp/email2.png";
import withRouter from "../HOC/Hoc";
import Continue from "../common/button/continue/Continue";
import { styles } from "./OtpStyles";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { OtpInput, ValidateOtp } from "../../redux/slices/Slice";
import { connect } from "react-redux";

interface IOtpProps {
  navigate: (path: string) => void;
  params: {
    id: string;
  };
  ValidateOtp : (values:OtpInput) => void
}

interface IOtpState {
  otp: { one: string; two: string; three: string; four: string };
}

class Otp extends Component<IOtpProps, IOtpState> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: IOtpProps) {
    super(props);
    this.state = {
      otp: { one: "", two: "", three: "", four: "" },
    };
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  componentDidMount(): void {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState(
      {
        otp: { ...this.state.otp, [name]: value },
      },
      () => {
        const currentName = name as keyof IOtpState["otp"];
        const nextInput = this.getNextInput(currentName);
        if (nextInput && value) {
          nextInput.focus();
        }
      }
    );
  };

  getNextInput = (
    currentName: keyof IOtpState["otp"]
  ): HTMLInputElement | null => {
    switch (currentName) {
      case "one":
        return this.inputRef.current
          ?.nextElementSibling as HTMLInputElement | null;
      case "two":
        return this.inputRef.current?.nextElementSibling
          ?.nextElementSibling as HTMLInputElement | null;
      case "three":
        return this.inputRef.current?.nextElementSibling?.nextElementSibling
          ?.nextElementSibling as HTMLInputElement | null;
      case "four":
        return null;
      default:
        return null;
    }
  };
  handleClick = async () => {
    const otp1 = Object.values(this.state.otp).join("");
    const payload = {
      mobile_number: String(this.props.params.id),
      otp: String(otp1),
    };
this.props.ValidateOtp(payload)
    // try {
    //   const response = await fetch(
    //     `https://9361-49-205-252-227.ngrok-free.app/user_block/otps/validate_otp?mobile_number=${payload.mobile_number}&otp=${payload.otp}`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   // if (!response.ok) {
    //   //   throw new Error("Something went wrong");
    //   // }
    //   const result = await response.json();
    //   localStorage.setItem("token", result.token);
    //   return result;
    // } catch (error) {
    //   console.log(error)
    //   throw error
    // }
  };

  render(): ReactNode {
    const { otp } = this.state;
    return (
      <Box sx={styles.container}>
        <Box sx={styles.otpContainer}>
          <Stack gap={"20px"}>
            <Stack justifyContent={"center"} alignItems={"center"} gap={"15px"}>
              <Box component={"img"} src={msgImage} sx={styles.image} />
              <Typography sx={styles.text1}>OTP Verification</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} gap={"5px"}>
              <Typography sx={styles.text2}>Enter the OTP Sent To</Typography>
              <Typography sx={styles.text3}>
                +91{this.props.params.id}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={"10px"}>
              <Box
                component={"input"}
                type="text"
                className="inputRef"
                sx={styles.input}
                maxLength={1}
                value={otp.one}
                name="one"
                onChange={this.handleChange}
                ref={this.inputRef}
              />
              <Box
                component={"input"}
                type="text"
                className="inputRef"
                sx={styles.input}
                maxLength={1}
                value={otp.two}
                name="two"
                onChange={this.handleChange}
              />
              <Box
                component={"input"}
                type="text"
                className="inputRef"
                sx={styles.input}
                maxLength={1}
                value={otp.three}
                name="three"
                onChange={this.handleChange}
              />
              <Box
                component={"input"}
                type="text"
                className="inputRef"
                sx={styles.input}
                maxLength={1}
                value={otp.four}
                name="four"
                onChange={this.handleChange}
              />
            </Stack>
          </Stack>
          <Box sx={styles.text4}>
            Don't Receive OTP{" "}
            <Box component={"span"} sx={styles.response}>
              Response
            </Box>
          </Box>
        </Box>
        <Continue title={"Submit"} handleClick={this.handleClick} />
      </Box>
    );
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  ValidateOtp: (values: OtpInput) => dispatch(ValidateOtp(values)),
});
const mapStateToProps = (state: RootState) => ({});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Otp));
