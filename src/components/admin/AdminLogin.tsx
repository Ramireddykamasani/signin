import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, Component } from "react";
import CloseIcon from "@mui/icons-material/Close";
import laptop from "../../assets/images/landingapage/laptop.avif";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const styles = {
  loginBtn: {
    width: "20%",
    padding: "10px",
    background: "#F5BF45",
    color: "white",
    borderRadius: "20px",
    textTransform: "none",
    "&:hover": {
      background: "#F5BF45",
      color: "white",
    },
  },
  loginContainer: {
    width: "50%",
    height: "100%",
    boxSizing: "border-box",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  input: {
    width: "80%",
  },
  welcome: {
    color: "black",
    padding: "10px",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: '"Montserrat Alternates", sans-serif',
  },
  text: {
    color: "black",
    padding: "10px",
    fontSize: "15px",
    fontWeight: "500",
    fontFamily: '"Montserrat Alternates", sans-serif',
    width: "50%",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-bwteen",
    alignItems: "center",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    transition: "4s",
  },
  imageafterclicking: {
    transform: `scale(1.5)`,
    transition: "4s",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    overflow: "hidden",
  },
  registerContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "0%",
    height: "0vh",
    transition: "1s",
    overflow: "hidden",
    position: "absolute",
    zIndex: "10",
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
  },
  mainafterclicking: {
    width: "70%",
    height: "60vh",
    transition: "1s",
    overflow: "hidden",
    position: "absolute",
    zIndex: "10",
    background: "#FFF",
  },
  LoginContainer: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "0px",
    background: "#F5BF45",
    color: "white",
    padding: "40px",
    transition: "2s",
    height: "10vh",
  },
  LoginContainerafterClicking: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "0px",
    background: "#F5BF45",
    color: "white",
    padding: "40px",
    height: "100vh",
    transition: "2s",
  },
  logBtn: {
    color: "#F5BF45",
    background: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: '"Montserrat Alternates", sans-serif',
    transition: "1s",
    overflow: "hidden",
    width: "20%",
    textAlign: "center",

    "&:hover": {
      color: "#F5BF45",
      background: "white",
      borderRadius: "20px",
      padding: "10px 20px",
      textTransform: "none",
    },
  },
  logBtnafterclicking: {
    width: "0%",
    transition: "1s",
    overflow: "hidden",
    textAlign: "center",
  },
  close: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "black",
    padding: "10px",
    boxSizing: "border-box",
    position: "absolute",
    top: "0px",
    right: "0px",
  },
};
interface Istate {
  email: string;
  password: string;
  isOpen: boolean;
}
interface Iprops {}
class AdminLogin extends Component<Iprops, Istate> {
  state: Istate = {
    email: "",
    password: "",
    isOpen: false,
  };
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prev) => ({ ...prev, [name]: value }));
  };
  handleLogin = async() => {
    
      try{
        var payload = {
            email:this.state.email,
            password:this.state.password
        }
        const response = await fetch('https://fipolarepobe.onrender.com/users/admin-login',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(payload)
        })
        const result = await response.json()
        if(result.status === 200)
        {
   alert('ok')
        }
      }
      catch(error)
      {
  console.log(error)
      }
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Box sx={styles.registerContainer}>
        <Box
          sx={
            !isOpen ? styles.LoginContainer : styles.LoginContainerafterClicking
          }
        >
          <Box
            sx={!isOpen ? styles.logBtn : styles.logBtnafterclicking}
            onClick={this.handleClick}
          >
            Click Here To Login
          </Box>
          <Box sx={!isOpen ? styles.main : styles.mainafterclicking}>
            <Box sx={styles.close}>
              <CloseIcon onClick={this.handleClick} />
            </Box>
            <Box sx={styles.container}>
              <Box sx={styles.loginContainer}>
                <Typography sx={styles.welcome}>Welcome!</Typography>
                <Typography sx={styles.text}>
                  Fanny pack hexagon food truck, street art waistcoat kitsch.
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="email"
                  InputProps={{
                    endAdornment: <MailOutlineIcon />,
                  }}
                  inputProps={{
                    style: {
                      padding: 5,
                    },
                  }}
                  sx={styles.input}
                  autoComplete="off"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="password"
                  InputProps={{
                    endAdornment: <RemoveRedEyeIcon />,
                  }}
                  inputProps={{
                    style: {
                      padding: 5,
                    },
                  }}
                  sx={styles.input}
                  autoComplete="off"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Button sx={styles.loginBtn} onClick={this.handleLogin}>
                  Login
                </Button>
              </Box>
              <Box sx={styles.imageContainer}>
                <Box
                  component={"img"}
                  src={laptop}
                  sx={isOpen ? styles.image : styles.imageafterclicking}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default AdminLogin;
