import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ChangeEvent, Component } from "react";
import TextFieldComponent from "../common/textfeild/TextFeild";
import Continue from "../common/button/continue/Continue";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import withRouter from "../HOC/Hoc";
import { styles } from "./ProfileStyles";
interface Iprops {
  navigate: (path: string) => void;
}

class Profle extends Component<Iprops, {}> {
  state = {
    image: "",
    userdetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  };
  handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const newImage = URL.createObjectURL(file);
      this.setState({ image: newImage });
    }
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userdetails: {
        ...this.state.userdetails,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleClick = () => {
    this.props.navigate("/homepage");
  };
  render() {
    const { userdetails } = this.state;

    return (
      <Box sx={styles.profileContainer}>
        <Box sx={styles.profileTitle}>
          <Typography sx={styles.title}>Profile</Typography>
          <KeyboardBackspaceIcon onClick={this.handleClick} sx={styles.arrow} />
        </Box>

        <Box
          component="input"
          type="file"
          id="image"
          accept="image/*"
          onChange={this.handleImageChange}
          sx={styles.input}
        />
        <Box sx={styles.imageContainer}>
          <Box
            component={"img"}
            sx={styles.image}
            src={this.state.image}
            onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) =>
              ((event.target as HTMLImageElement).src =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd6VLrAsHVVG0KJ7dMy-36-RAunP8w48blA&s")
            }
          />
          <Box sx={styles.editContainer} component={"label"} htmlFor="image">
            <EditIcon />
          </Box>
        </Box>
        <Box sx={styles.textfeildContainer}>
          <TextFieldComponent
            title={"First Name"}
            handleChange={this.handleChange}
            name="firstName"
            value={userdetails.firstName}
          />
          <TextFieldComponent
            title={"Last Name"}
            handleChange={this.handleChange}
            name="lastName"
            value={userdetails.lastName}
          />

          <TextFieldComponent
            title={"Phone"}
            handleChange={this.handleChange}
            name="phone"
            value={userdetails.phone}
          />

          <TextFieldComponent
            title={"Email"}
            handleChange={this.handleChange}
            name="email"
            value={userdetails.email}
          />
        </Box>

        <Continue title="Register" handleClick={this.handleClick} />
      </Box>
    );
  }
}
export default withRouter(Profle);
